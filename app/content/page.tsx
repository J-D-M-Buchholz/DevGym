import React from "react"

import Content from "@/components/content/Content"
import Content_Container from "@/components/content/content_mongodb/Content_Container"


const page = () => {
  return (
    <div>
      <Content_Container/>
      <Content/>
    </div>
  )
}

export default page
