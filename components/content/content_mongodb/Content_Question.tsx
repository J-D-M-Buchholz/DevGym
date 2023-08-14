import React, { useState } from "react"

import { ContentsDB } from "@/types/content"

import { ContentItem } from "./Content_Fetch"

interface mainContentProps {
  contents?: ContentsDB[]
  selectedTitle: string
}

export default function Content_Question({
  contents,
  selectedTitle,
}: mainContentProps) {
  const [selectedQuestion, setSelectedQuestion] = useState<null | string>(
    null
  )

  return (
<div className="text-center w-2/3">
      <div className="flex flex-wrap my-20">
        {contents &&
          contents.map((content: ContentItem, index: number) => {
            return (
              <div key={content._id.toString()}>
                {content.title === selectedTitle &&
                content.topic === "question" ? (
                  <div className="flex gap-5">
                    <button
                      className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      onClick={() => setSelectedQuestion(content._id.toString())}
                    >
                      {content.question.heading}
                    </button>
  
                    {/*<p>{content._id}</p> */}
                  </div>
                ) : null}
              </div>
            )
          })}
          </div>
  
        {contents &&
          contents.map((content: ContentItem) => {
            return (
              <div>
                {content._id.toString() === selectedQuestion ? (
                  <p className="text-2xl border mb-20 rounded-md p-2"> Q : {content.question.text}</p>
                ) : null}
              </div>
            )
          })}
</div>
  )
}






