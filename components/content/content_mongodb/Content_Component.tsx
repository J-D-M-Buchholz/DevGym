'use client'

import React, { useState, useEffect } from "react";
import Content_Post from "./Content_Post";

// export type ContentItem = {
//   title: string;
//   topic: string;
  
// }
export type ContentItem = any;

export default function ContentComponent() {
  const [content, setContent] = useState<ContentItem[] | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await fetch("/api/content/contentroute", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('responseData!!!', responseData)
        console.log("response success! ⭐️");
        setContent(responseData); 
      } catch (err) {
        console.error("An error occurred 😂 :", err);
      }
    }

    fetchContent();
  }, []); 

  console.log("check data", setContent) // null
  
  return (
   <Content_Post content={content} />
  );
}
