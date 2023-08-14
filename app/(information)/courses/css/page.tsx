import Content_Post from '@/components/content/content_mongodb/Content_Post'
import React from 'react'
import Courses from '../content/courses'

export default function page() {
    const title_path: string = "css";
  return (
    <div >
      <Courses />
       <Content_Post title_path={title_path} />
    </div>
  )
}
