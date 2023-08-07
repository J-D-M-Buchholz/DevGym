"use client";
import React, { useState, Dispatch, SetStateAction } from "react";
import "./RightSection.css";
import { FaBell, FaComment, FaHome, FaSlidersH } from "react-icons/fa";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";

interface RightSectionProps {
  showProfile: boolean;
  setShowProfile: Dispatch<SetStateAction<boolean>>;
}

const RightSection: React.FC<RightSectionProps> = ({
  showProfile,
  setShowProfile,
}) => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="dash_RightSide">
      <div className="dash_navIcons">
        <div className="dash_Icon" onClick={() => setShowProfile(false)}>
          <FaHome />
        </div>
        <div className="dash_Icon" onClick={() => setShowProfile(true)}>
          <FaSlidersH />
        </div>{" "}
        <div className="dash_Icon">
          <FaBell />
        </div>{" "}
        <div className="dash_Icon">
          <FaComment />
        </div>
      </div>
      <TrendCard />
      <button className="dash_button dash_r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSection;
