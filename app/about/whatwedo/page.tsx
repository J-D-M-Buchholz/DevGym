import AboutContent_Team from '@/components/about/AboutContent_Team'
import WhatWeDo_FlowingBoard from '@/components/about/whatwedo/WhatWeDo_FlowingBoard'
import WhatWeDo_Hero from '@/components/about/whatwedo/WhatWeDo_Hero'
import WhatWeDo_Introduction from '@/components/about/whatwedo/WhatWeDo_Introduction'
import React from 'react'

export default function whatwedoPage() {
  return (
    <div>
        <WhatWeDo_Hero/>
       {/*  <WhatWeDo_FlowingBoard/> */}
        <WhatWeDo_Introduction />
        <AboutContent_Team/>
    </div>
  )
}
