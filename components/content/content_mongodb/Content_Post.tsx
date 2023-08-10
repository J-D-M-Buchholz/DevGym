'use client'

import ContentFetch from "./Content_Fetch"
import Content_Explanation from "./Content_Explanation"
import Content_Question from './Content_Question'

type Props = {
  title_path : string
}

export default function Content_Post({title_path} : Props) {
  const contents = ContentFetch()
  return (
    <div>
        <Content_Explanation contents={contents} title_path={title_path}/>
        <Content_Question contents={contents} title_path={title_path}/>
    </div>
  )
}
