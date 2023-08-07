import React from "react";
import "./Posts.css";
import { PostsData } from "@/Data/PostData";
import Post from "../Post/Post";

interface PostData {
  img: string;
  name: string;
  desc: string;
  likes: number;
  liked: boolean;
}

const Posts: React.FC = () => {
  return (
    <div className="dash_Posts">
      {PostsData.map((post: PostData, id: number) => {
        return <Post data={post} key={id} />;
      })}
    </div>
  );
};

export default Posts;
