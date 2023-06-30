import React from 'react'
import './hero.css'
import { Header } from './Content/header'
import { Features } from './Content/features'

const Hero = () => {
  return (
    <div className='w-full'>
      <Header />
      <Features />
    </div>
  )
}

export default Hero