"use client"
import React from "react"

import Courses from "../content/courses"
import ContentFetch from "@/components/content/content_mongodb/Content_Fetch"
import Content_Explanation from "@/components/content/content_mongodb/Content_Explanation"

export default function page() {
  const selectedTitle = "js"
  const contents = ContentFetch()
  return (
    <div className="container max-w-[85rem] py-4 flex flex-col items-center justify-center ">
      <Courses />
      <Content_Explanation contents={contents} selectedTitle={selectedTitle} />
    </div>
  )
}
