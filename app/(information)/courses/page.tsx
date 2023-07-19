import React from 'react'
import Search from './content/search'
import Banner from './content/banner'
import Courses from './content/courses'

const page = () => {
  return (
    <div>
      <Banner />
      <Search />
      <Courses />
    </div>
  )
}

export default page