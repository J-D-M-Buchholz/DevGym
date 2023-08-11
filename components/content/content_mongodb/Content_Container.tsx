'use client'
import React from 'react'
import ContentFetch from './Content_Fetch'
import { useState } from 'react'

export default function Content_Conatiner() {
  const contents = ContentFetch()
  const [titles, setTitles] = useState(["html", "css", "js"])
  const [selectedTitle, setSelectedTitle] = useState(null)

  function handleClick(title : any) {
    setSelectedTitle(title)
  }

  return (
    <div className='flex text-3xl justify-around max-w-[85rem] bg-yellow-400 '>
      {titles.map((title) : any => {
        return <div key={title} onClick={()=> handleClick(title)}>{title}</div>
      })}
    </div>
  )
}
