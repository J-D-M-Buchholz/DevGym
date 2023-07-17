"use client"

import React, { useRef, useState } from "react"
import { CldUploadButton } from "next-cloudinary"
import {
  FaCalendar,
  FaImage,
  FaLocationArrow,
  FaShare,
  FaTimes,
  FaVideo,
} from "react-icons/fa"

import "./PostShare.css"
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
      newPost.image = fileName

      try {
        const uploadResponse = await fetch("/api/dashboard/upload", {
          method: "POST",
          body: data,
        })
        if (uploadResponse.ok) {
          console.log("Image uploaded successfully")
        } else {
          console.log("Image upload failed", data)
        }
      } catch (error) {
        console.log("Image upload failed:", error)
      }
    }

    try {
      const postResponse = await fetch("/api/dashboard/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      })

      if (postResponse.ok) {
        console.log("Post created successfully")
      } else {
        console.log("Failed to create post")
      }
    } catch (error) {
      console.log("Failed to create post:", error)
    }
  }

  return (
    <div className="dash_PostShare">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="dash_PostShare-img"
        width={100}
        height={100}
      />
<CldUploadButton uploadPreset="dkzi0oh4l" />
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
