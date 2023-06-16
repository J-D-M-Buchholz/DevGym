"use client";
import React, { useState, useRef } from "react";
import {
  FaCalendar,
  FaImage,
  FaLocationArrow,
  FaShare,
  FaTimes,
  FaVideo,
} from "react-icons/fa";
import "./PostShare.css";
import { useAuth } from "@/components/AuthContext";

const PostShare = () => {
  const [image, setImage] = useState<File | null>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const desc = useRef<HTMLInputElement>(null);
  const { responseData } = useAuth();

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

      const user = responseData?.user
      const newPost: { userId: string; desc: any; image?: string } = {
        userId: user._id,
        desc: desc.current?.value
      }
      if (image) {
        const data = new FormData();
        const fileName = Date.now() + image.name;
        data.append("name", fileName);
        data.append("file", image);
        newPost.image = fileName;
        console.log(newPost);
      };
  };

  return (
    <div className="PostShare">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="PostShare-img"
        width={100}
        height={100}
      />
      <div>
        <input ref={desc} required type="text" placeholder="Post it..." />
        <div className="postOptions">
          <div
            className="button option"
            onClick={() => imageRef.current?.click()}
          >
            <FaImage />
            Photo
          </div>
          <div className="button option">
            <FaVideo />
            Video
          </div>{" "}
          <div className="button option">
            <FaLocationArrow />
            Location
          </div>{" "}
          <div className="button option">
            <FaCalendar />
            Calendar
          </div>
          <button className="button" onClick={handleSubmit}>
            <FaShare />
            Share
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <FaTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
