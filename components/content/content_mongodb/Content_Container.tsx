"use client"

import React, { useState } from "react"

import Content_Explanation from "./Content_Explanation"
import ContentFetch from "./Content_Fetch"
import Content_Question from "./Content_Question"

export default function Content_Container() {
  const contents = ContentFetch()
  const [titles, setTitles] = useState(["html", "css", "js"])
  const [selectedTitle, setSelectedTitle] = useState("html")
  const [selectedQuestion, setSelectedQuestion] = useState(null)

  function handleClick(title: any) {
    setSelectedTitle(title)
  }

  return (
    <>
      <div className="max-w-full flex justify-around gap-20 text-3xl py-3 px-6 rounded-md shadwo-md dark:bg-white/[.03] ">
        {titles.map((title): any => {
          return (
            <button
              className="cursor-pointer inline-flex justify-center items-center m-1 py-3 px-4 border rounded-md shadow-md bg-white hover:bg-gray-50 focus:outline-none focus:ring focus:text-black focus:ring-amber-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 dark:focus:text-white"
              key={title}
              onClick={() => handleClick(title)}
            >
              {title.toUpperCase()}
            </button>
          )
        })}
      </div>
      <Content_Explanation contents={contents} selectedTitle={selectedTitle} />
      <Content_Question contents={contents} selectedTitle={selectedTitle} />
    </>
  )
}
