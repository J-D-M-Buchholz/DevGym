import React from 'react'
import Search from './content/search'
import Banner from './content/banner'
import Courses from './content/courses'
import ContentComponent from '@/components/content/content_mongodb/Content_Component'
const page = () => {
  return (
    <div>
      <Banner />
      <Search />
      <Courses />
      <ContentComponent />
    </div>
  )
}

export default page