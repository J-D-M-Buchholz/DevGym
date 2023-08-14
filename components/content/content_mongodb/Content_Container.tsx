'use client'
import React from 'react'
import ContentFetch from './Content_Fetch'
import { useState } from 'react'
import Content_Explanation from './Content_Explanation'
import Content_Question from './Content_Question'
import { ContentsDB } from '@/types/content'

// interface mainContentProps {
//   contents?: ContentsDB,
//   selectedTitle : string
// }

export default function Content_Container() {
  const contents = ContentFetch()
  const [titles, setTitles] = useState(["html", "css", "js"])
  const [selectedTitle, setSelectedTitle] = useState("html")
  const [selectedQuestion, setSelectedQuestion] = useState(null)

  function handleClick(title : any) {
    setSelectedTitle(title)
  }

  return (
    <section>
    <div className='flex text-3xl justify-around max-w-[85rem] bg-yellow-400 '>
      {titles.map((title) : any => {
        return <div key={title} onClick={()=> handleClick(title)}>{title.toUpperCase()}</div>
      })}
    </div>
    {/* @ts-ignore */}
    <Content_Explanation contents={contents} selectedTitle={selectedTitle} />
    {/* @ts-ignore */}
    <Content_Question  contents={contents} selectedTitle={selectedTitle}   />
    </section>
  )
}
