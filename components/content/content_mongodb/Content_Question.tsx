import React from "react"
import { ContentItem } from "./Content_Fetch"

type Props = {
  title_path: string
  contents : ContentItem
} 



export default function Content_Explanation({ contents, title_path }: Props) {
  return (
    <div>
      {contents &&
        contents.map((item : ContentItem) => {
          return (
            <div>
              {item.title === title_path && item.topic === "question" ? (
                <div>
                  <p>{item.question.heading}</p>
                  <p>{item.question.text}</p>
                </div>
              ) : null}
            </div>
          )
        })}
    </div>
  )
}
