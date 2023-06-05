import React from "react";
import "./ProfileLeft.css";
import Search from "../Search/Search";
import FollowersCard from "../FollowersCard/FollowersCard";
import InfoCard from "../InfoCard/InfoCard";

const ProfileLeft: React.FC = () => {
  return (
    <div className="Profile">
      <InfoCard />
      <Search />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
