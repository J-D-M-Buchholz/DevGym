import React from "react"

import Content from "@/components/content/Content"
import Content_Conatiner from "@/components/content/content_mongodb/Content_Container"


const page = () => {
  return (
    <div>
      <Content_Conatiner/>
      <Content />
    </div>
  )
}

export default page
