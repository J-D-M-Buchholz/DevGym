import React from "react";
import "./FollowersCard.css";
import { Followers } from "@/Data/FollowersData";

interface Follower {
  img: string;
  name: string;
  username: string;
}

const FollowersCard: React.FC = () => {
  return (
    <div className="FollowersCard">
      <h1>Followers...</h1>
      {Followers.map((follower: Follower, id: number) => {
        return (
          <div className="follower" key={id}>
            <div>
              <img src={follower.img} alt="" className="followerImage" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
