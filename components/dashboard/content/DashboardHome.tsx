import React, { Dispatch, SetStateAction } from "react";
import "./DashboardHome.css";
import PostSection from "./PostSection/PostSection";
import RightSection from "./RightSection/RightSection";
import ProfileSection from "./ProfileSection/ProfileSection";

interface DashboardHomeProps {
  showProfile: boolean;
  setShowProfile: Dispatch<SetStateAction<boolean>>;
}

const DashboardHome: React.FC<DashboardHomeProps> = ({
  showProfile,
  setShowProfile,
}) => {
  return (
    <div className="dash_Home">
      <ProfileSection
        showProfile={showProfile}
        setShowProfile={setShowProfile}
      />
      <PostSection />
      <RightSection 
        showProfile={showProfile} 
        setShowProfile={setShowProfile} 
      />
    </div>
  );
};

export default DashboardHome;
