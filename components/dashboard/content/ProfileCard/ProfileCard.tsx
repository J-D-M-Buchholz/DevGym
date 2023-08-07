"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import "./ProfileCard.css";

interface ProfileCardProps {
  showProfile: boolean;
  setShowProfile: Dispatch<SetStateAction<boolean>>;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  showProfile,
  setShowProfile,
}) => {
  const [ProfilePage, setProfilePage] = useState(false);

  React.useEffect(() => {
    setProfilePage(showProfile);
  }, [showProfile]);

  return (
    <div className="dash_ProfileCard">
      <div className="dash_ProfileImages">
        <img
          src="/background.jpeg"
          alt="Background"
          className="dash_ProfileImages1"
          width={100}
          height={100}
        />
        <img
          src="/joel.png"
          alt="Profile"
          className="dash_ProfileImages2"
          width={100}
          height={100}
        />
      </div>

      <div className="dash_ProfileName">
        <span>Joel</span>
        <span>Full Stack Entwickler</span>
      </div>

      <div className="dash_followStatus">
        <hr />
        <div>
          <div className="dash_follow">
            <span>25</span>
            <span>Followings</span>
          </div>
          <div className="dash_vl"></div>
          <div className="dash_follow">
            <span>35</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="dash_vl"></div>
              <div className="dash_follow">
                <span>45</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? (
        ""
      ) : (
        <span
          onClick={() => setShowProfile(!showProfile)}
          className="dash_ProfileButton"
        >
          My Profile
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
