import React, { Dispatch, SetStateAction } from "react";
import "./DashboardProfile.css";
import ProfileLeft from "./ProfileLeft/ProfileLeft";
import PostSection from "./PostSection/PostSection";
import RightSection from "./RightSection/RightSection";
import ProfileCard from "./ProfileCard/ProfileCard";

interface DashboardProfileProps {
  showProfile: boolean;
  setShowProfile: Dispatch<SetStateAction<boolean>>;
}

const DashboardProfile: React.FC<DashboardProfileProps> = ({
  showProfile,
  setShowProfile,
}) => {
  return (
    <div className="DashboardProfile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard
          showProfile={showProfile}
          setShowProfile={setShowProfile}
        />
        <PostSection />
      </div>
      <RightSection 
        showProfile={showProfile} 
        setShowProfile={setShowProfile} 
      />
    </div>
  );
};

export default DashboardProfile;
