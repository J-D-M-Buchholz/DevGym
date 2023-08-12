import React from "react"
import { ContentItem } from "./Content_Fetch"
import { ContentsDB } from "@/types/content"
import MarkDownViewer from "@/components/markdownViewer/MarkdownViewer"
interface mainContentProps {
  contents?: ContentsDB,
  selectedTitle : string
}

export default function Content_Explanation({ contents, selectedTitle } : mainContentProps) {
  return (
    <div className="max-w-[85rem]">
      {contents &&
        contents.map((content : ContentItem) => {
          return (
            <div key={content._id}>
              {content.title === selectedTitle && content.topic === "explanation" ? (
                <div className="text-center">
                  <p className="text-3xl text-green-800">{content.explanation.heading}</p>
                  <MarkDownViewer content={content.explanation.text} />
                  {/* <p>{content.explanation.text}</p> */}
                </div>
              ) : null}
            </div>
          )
        })}
    </div>
  )
}
