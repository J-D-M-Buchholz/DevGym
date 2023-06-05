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

interface Image {
  image: string;
}

const PostShare = () => {
  const [image, setImage] = useState<Image | null>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
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
        <input type="text" placeholder="Post it..." />
        <div className="postOptions">
          <div className="button option" onClick={() => imageRef.current?.click()}>
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
          <button className="button">
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
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
