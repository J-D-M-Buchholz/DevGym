import React from "react"

import AbountContent_Hero from "@/components/about/AbountContent_Hero"
import AboutContent_Header from "@/components/about/AboutContent_Header"
import { AboutContent_Sec_Section } from "@/components/about/AboutContent_Sec_Section"
import AboutContent_Team from "@/components/about/AboutContent_Team"

const page = () => {
  return (
    <div>
      <AbountContent_Hero />
      <AboutContent_Header />
      <AboutContent_Sec_Section />
      <AboutContent_Team />
    </div>
  )
}

export default page
