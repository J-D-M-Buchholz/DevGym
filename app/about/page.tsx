import React from 'react'
import AboutContent_Header from '@/components/About/AboutContent_Header'
import AboutContent_Team from '@/components/About/AboutContent_Team'
import AbountContent_Hero from '@/components/About/AbountContent_Hero'

const page = () => {
  return (
  <div>
    <AbountContent_Hero />
    <AboutContent_Header/> 
    <AboutContent_Team/>
  </div>
  )
}

export default page