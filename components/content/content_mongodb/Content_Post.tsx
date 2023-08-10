import React from "react"

import { ContentItem } from "./Content_Component"

type Props = {
  content: ContentItem[] | null
}

const HTML = "html"
const CSS = "css"
const JS = "js"
const Q = "question"
const E = "explanation"

export default function Content_Post({ content }: Props) {
  return (
    <div>
      {content &&
        content.map((item) => {
          return (
            <div>
              {/* {item.topic === "question" ? <p>{item.question.heading}</p> : null}
              {item.topic === "explanation"? <p className="text-green-500">{item.explanation.heading}</p> : null} */}
              {item.title === HTML && item.topic === Q ? <p className="text-green-500">{item.question.heading}</p> : null}
              {item.title === CSS ? <p className="text-red-400">{item.question.heading}</p> : null}
              
            </div>
          )
        })}
    </div>
  )
}
