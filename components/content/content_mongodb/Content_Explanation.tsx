import React from "react"
import { useTheme } from "next-themes"

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
  const { theme } = useTheme()
  return (
    <div >
      {contents &&
        contents.map((content: ContentsDB) => {
          return (
            <div key={content._id.toString()}>
              {content.title === selectedTitle &&
              content.topic === "explanation" ? (
                <div className="text-center">
                  <p
                    style={{
                      color: !theme || theme === "light" ? "black" : "white",
                    }}
                    className="text-sm"
                  >
                    {content.explanation.heading}
                  </p>
                  <MarkDownViewer content={content.explanation.text} />
                </div>
              ) : null}
            </div>
          )
        })}
    </div>
  )
}
