"use client"

import React from "react"

import Editor from "./content/Editor/Editor"
import "./Content.css"
import Content_Container from "./content_mongodb/Content_Container"

const Content = () => {
  return (
    <div className="container max-w-[85rem] py-4 flex flex-col items-center justify-center ">
      <Content_Container />
      <Editor />
    </div>
  )
}

export default Content
