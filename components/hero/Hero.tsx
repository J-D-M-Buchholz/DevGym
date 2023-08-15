import React from 'react'
import './hero.css'
import { Header } from './content/header'
import { Features } from './content/features'
import { Information } from './content/information'
import { Pricing } from './content/pricing'

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