import React, { useState } from "react";
import "./FollowersCard.css";
import { Followers } from "@/Data/FollowersData";

interface Follower {
  img: string;
  name: string;
  username: string;
}

const FollowersCard: React.FC = () => {
  const [follow, setFollow] = useState(Array(Followers.length).fill(false));

  const handleFollow = (id: number) => {
    const newFollow = [...follow];
    newFollow[id] = !newFollow[id];
    setFollow(newFollow);
  };

  return (
    <div className="dash_FollowersCard">
      <h1>Followers...</h1>
      {Followers.map((follower: Follower, id: number) => {
        return (
          <div className="dash_follower" key={id}>
            <div>
              <img src={follower.img} alt="" className="dash_followerImage" />
              <div className="dash_name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button
              className="dash_button dash_fc-button"
              onClick={() => handleFollow(id)}
            >
              {follow[id] ? "Follow" : "Unfollow"}
            </button>
          </div>
        );
      })}
    </div>
  );
};


export default FollowersCard;
