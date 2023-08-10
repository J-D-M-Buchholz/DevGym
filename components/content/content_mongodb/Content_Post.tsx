'use client'

import { title } from "process"
import ContentFetch from "./Content_Fetch"

type Props = {
  title_path : string
}

export default function Content_Post({title_path} : Props) {
  const content = ContentFetch()
  return (
    <div>
      {content &&
        content.map((item) => {
          return (
            <div>
              {item.title === title_path && item.topic === "question" ? 
              <div>
              <p>{item.question.heading}</p> 
              <p>{item.question.text}</p>
              </div>
              : null}

            </div>
          )
        })}
    </div>
  )
}
