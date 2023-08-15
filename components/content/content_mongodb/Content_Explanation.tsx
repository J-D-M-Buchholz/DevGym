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
    <div>
      {contents &&
        contents.map((content: ContentsDB) => {
          return (
            <div key={content._id.toString()}>
              {content.title === selectedTitle &&
              content.topic === "explanation" ? (
                <div className="text-center">
                  <MarkDownViewer content={content.explanation.text} />
                </div>
              ) : null}
            </div>
          )
        })}
    </div>
  )
}
