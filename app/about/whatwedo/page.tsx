import AboutContent_Team from '@/components/About/AboutContent_Team'
import WhatWeDo_FlowingBoard from '@/components/About/whatwedo/WhatWeDo_FlowingBoard'
import WhatWeDo_Hero from '@/components/About/whatwedo/WhatWeDo_Hero'
import WhatWeDo_Introduction from '@/components/About/whatwedo/WhatWeDo_Introduction'
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
