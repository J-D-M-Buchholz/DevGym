import React from "react"
import { ContentItem } from "./Content_Fetch"

type Props = {
  title_path: string
  contents : ContentItem
} 



export default function Content_Explanation({ contents, title_path }: Props) {
  return (
    <div className="max-w-[85rem]">
      {contents &&
        contents.map((item : ContentItem) => {
          return (
            <div>
              {item.title === title_path && item.topic === "explanation" ? (
                <div className="text-center">
                  <p className="text-3xl text-green-800">{item.explanation.heading}</p>
                  <p>{item.explanation.text}</p>
                </div>
              ) : null}
            </div>
          )
        })}
    </div>
  )
}
