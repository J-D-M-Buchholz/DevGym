import React, { useState } from "react"
import { ContentItem } from "./Content_Fetch"
import { ContentsDB } from "@/types/content"

interface mainContentProps {
  contents?: ContentsDB,
  selectedTitle : string
}


export default function Content_Question({ contents, selectedTitle }: mainContentProps) {

  const [selectedQuestion, setSelectedQuestion] = useState(null)
  //const [selectedQuestionId, setSelectedQuestionId] = useState(null)

  return (
    <div className="max-w-[85rem]">
      {contents &&
        contents.map((content : ContentItem, index:number) => {
          return (
            <div key={content._id}>
              {content.title === selectedTitle && content.topic === "question" ? (
                <div className="text-center">
                  <button className="text-3xl text-green-800 bg-slate-300" onClick={()=> setSelectedQuestion(content._id)}>{content.question.heading}</button>
                  <p className="">{content.question.text}</p>
                  <p>{content._id}</p>
                </div>
              ) : null}
            </div>
          )
        })}

        {/* {contents && contents.map((content) : ContentItem => {
          return (
            {content._id === selectedQuestionId ? <p>{content}</p>}
          )
        })} */}
        {selectedQuestion !== null && <p></p>}
    </div>
  )
}



