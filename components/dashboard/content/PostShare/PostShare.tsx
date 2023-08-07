"use client"

import React, { useRef, useState } from "react"
import {
  FaCalendar,
  FaImage,
  FaLocationArrow,
  FaShare,
  FaTimes,
  FaVideo,
} from "react-icons/fa"

import "./PostShare.css"
import { response } from "express"

import { useAuth } from "@/components/AuthContext"

const PostShare = () => {
  const [image, setImage] = useState<File | null>(null)
  const imageRef = useRef<HTMLInputElement>(null)
  const desc = useRef<HTMLInputElement>(null)
  const { responseData } = useAuth()

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage(img)
    }
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const user = responseData?.user
    const newPost: { userId: string; desc: any; image?: string } = {
      userId: user._id,
      desc: desc.current?.value,
    }

    if (image) {
      const data = new FormData()
      const fileName = Date.now() + image.name
      data.append("name", fileName)
      data.append("file", image)
      data.append("upload_preset", "ai89ncel")

      try {
        const uploadResponse = await fetch(
          "https://api.cloudinary.com/v1_1/dkzi0oh4l/image/upload",
          {
            method: "POST",
            body: data,
          }
        )
        if (uploadResponse.ok) {
          const jsonResponse = await uploadResponse.json()
          const assetId = jsonResponse.public_id
          newPost.image = assetId
          console.log("Bild erfolgreich hochgeladen. Asset-ID:", assetId)
        } else {
          console.log("Bild-Upload fehlgeschlagen", data)
        }
      } catch (error) {
        console.log("Bild-Upload fehlgeschlagen:", error)
      }
    }

    if (newPost.image) {
      try {
        const postResponse = await fetch("/api/dashboard/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        })

        if (postResponse.ok) {
          console.log("Beitrag erfolgreich erstellt")
          localStorage.setItem("newPost", JSON.stringify(newPost))
        } else {
          console.log("Fehler beim Erstellen des Beitrags")
        }
      } catch (error) {
        console.log("Fehler beim Erstellen des Beitrags:", error)
      }
    }
  }

  return (
    <div className="dash_PostShare">
      <img
        src="/joel.png"
        alt="Profile"
        className="dash_PostShare-img"
        width={100}
        height={100}
      />
      <div>
        <input ref={desc} required type="text" placeholder="Post it..." />
        <div className="dash_postOptions">
          <div
            className="dash_button dash_option"
            onClick={() => imageRef.current?.click()}
          >
            <FaImage />
            Photo
          </div>
          <div className="dash_button dash_option">
            <FaVideo />
            Video
          </div>{" "}
          <div className="dash_button dash_option">
            <FaLocationArrow />
            Location
          </div>{" "}
          <div className="dash_button dash_option">
            <FaCalendar />
            Calendar
          </div>
          <button className="dash_button" onClick={handleSubmit}>
            <FaShare />
            Share
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
              multiple
            />
          </div>
        </div>
        {image && (
          <div className="dash_previewImage">
            <FaTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PostShare
