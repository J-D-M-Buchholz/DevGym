import React from "react";
import "./PostSection.css";
import PostShare from "../PostShare/PostShare";
import Posts from "../Posts/Posts";

const PostSection: React.FC = () => {
  return (
    <div className="PostSection">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSection;
