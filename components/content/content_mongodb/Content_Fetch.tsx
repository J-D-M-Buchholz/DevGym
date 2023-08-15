import React, { useEffect, useState } from "react"
import { ContentsDB } from '@/types/content'

export type ContentItem = ContentsDB

export default function ContentFetch(): ContentsDB[] | undefined {
  const [content, setContent] = useState<ContentItem[] | undefined>(undefined)

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await fetch("/api/content/contentroute", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const responseData = await response.json()
        setContent(responseData)
      } catch (err) {
        console.error("An error occurred 😂 :", err)
      }
    }

    fetchContent()
  }, [])

  return content
}
