import React from 'react'
import { Certificate_Array } from './Qualification'
import Qualification_Card from './Qualification_Card'
import MultiCarousel from './Qualification_MultiCarousel'

export default function Qualification_Carousel() {
  //<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  return (
   
      <div className='grid gap-4 my-20'>
      <MultiCarousel>
      {Certificate_Array.map((certificate) => (
        <div key={certificate.name}>
          <Qualification_Card certificate={certificate} />
        </div>
      ))}
      </MultiCarousel>
    </div>
  )
}
