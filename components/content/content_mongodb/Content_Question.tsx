import React, { useState } from "react"

import { ContentsDB } from "@/types/content"

import { ContentItem } from "./Content_Fetch"

interface mainContentProps {
  contents?: ContentsDB
  selectedTitle: string
}

export default function Content_Question({
  contents,
  selectedTitle,
}: mainContentProps) {
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  //const [selectedQuestionId, setSelectedQuestionId] = useState(null)

  return (
    <div className="max-w-[85rem] gap-5">
      {contents &&
        contents.map((content: ContentItem, index: number) => {
          return (
            <div key={content._id}>
              {content.title === selectedTitle &&
              content.topic === "question" ? (
                <div className="flex gap-5">
                  <button
                    className="text-xl text-green-800 bg-slate-300"
                    onClick={() => setSelectedQuestion(content._id)}
                  >
                    {content.question.heading}
                  </button>

                  {/*<p>{content._id}</p> */}
                </div>
              ) : null}
            </div>
          )
        })}

      {contents &&
        contents.map((content: ContentItem) => {
          return (
            <div>
              {content._id === selectedQuestion ? (
                <p className="font-3xl text-red-500">{content.question.text}</p>
              ) : null}
            </div>
          )
        })}
      
    </div>
  )
}
