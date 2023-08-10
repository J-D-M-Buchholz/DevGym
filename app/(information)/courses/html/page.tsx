import Content_Post from '@/components/content/content_mongodb/Content_Post'
import React from 'react'


export default function page() {
    const title_path: string = "html";
  return (
    <div>
       <Content_Post title_path={title_path} />
    </div>
  )
}
