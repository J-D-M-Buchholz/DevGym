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

  // Update ProfilePage whenever showProfile changes
  React.useEffect(() => {
    setProfilePage(showProfile);
  }, [showProfile]);

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src="/background.jpg"
          alt="Background"
          className="ProfileImages1"
          width={100}
          height={100}
        />
        <img
          src="/profile.jpg"
          alt="Profile"
          className="ProfileImages2"
          width={100}
          height={100}
        />
      </div>

      <div className="ProfileName">
        <span>Adolfus </span>
        <span>Junior Java Entwickler</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>25</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>35</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
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
          className="ProfileButton"
        >
          My Profile
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
