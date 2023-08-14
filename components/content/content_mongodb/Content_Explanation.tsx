import React from "react"

import { ContentsDB } from "@/types/content"
import MarkDownViewer from "@/components/markdownViewer/MarkdownViewer"
interface mainContentProps {
  contents?: ContentsDB[]
  selectedTitle: string
}

export default function Content_Explanation({
  contents,
  selectedTitle,
}: mainContentProps) {
  return (
    <div className="max-w-[85rem]">
      {contents &&
        contents.map((content: ContentItem) => {
          return (
            <div key={content._id.toString()}>
              {content.title === selectedTitle &&
              content.topic === "explanation" ? (
                <div className="text-center">
                  <p className="text-sm text-white">{content.explanation.heading}</p>
                  <MarkDownViewer content={content.explanation.text} />
                </div>
              ) : null}
            </div>
          )
        })}
    </div>
  )
}
