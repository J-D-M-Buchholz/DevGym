import React from "react"
import Image from "next/image"

import Qualification_Hero from "@/components/Qualification/Qualification_Hero"

import Qualification_Carousel from "@/components/Qualification/Qualification_Carousel"
import Qualification_Progess from "@/components/Qualification/Qualification_Progess"

export default function page() {
  return (
    <div>
      <Qualification_Hero />
      <Qualification_Carousel/>
      <Qualification_Progess />
    </div>
  )
}
