import React, { useState } from "react";
import "./FollowersCard.css";
import { Followers } from "@/Data/FollowersData";

interface Follower {
  img: string;
  name: string;
  username: string;
}

const FollowersCard: React.FC = () => {
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
            <button className="dash_button dash_fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
