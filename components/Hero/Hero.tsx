import React from 'react'
import './hero.css'
import { Header } from './Content/header'
import { Features } from './Content/features'
import { Information } from './Content/information'
import { Pricing } from './Content/pricing'

const Hero = () => {
  return (
    <div className='w-full'>
      <Header />
      <Features />
      <Information />
      <Pricing />
    </div>
  )
}

export default Hero