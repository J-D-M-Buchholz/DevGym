import React, { Dispatch, SetStateAction } from "react";
import "./ProfileSection.css";
import Search from "../Search/Search";
import ProfileCard from "../ProfileCard/ProfileCard";
import FollowersCard from "../FollowersCard/FollowersCard";

interface ProfileSectionProps {
  showProfile: boolean;
  setShowProfile: Dispatch<SetStateAction<boolean>>;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  showProfile,
  setShowProfile,
}) => {
  return (
    <div className="Profile">
      <ProfileCard showProfile={showProfile} setShowProfile={setShowProfile} />
      <Search />
      <FollowersCard />
    </div>
  );
};

export default ProfileSection;
