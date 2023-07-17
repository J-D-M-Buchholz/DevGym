import React from 'react'
import Percentage from './Qualification_Percentage'
import { Certificate_Array } from './Qualification'
import Qualification_Percentage from './Qualification_Percentage'
import Image from 'next/image'



export default function Qualification_Progess() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 mb-20">
         <div
           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
           aria-hidden="true">
           <div
             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
             style={{
               clipPath:
                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
             }}
           /> 
         </div>
    <div className="flex flex-col justify-center items-center min-h-screen ">
        <h1 className='text-4xl m-4 font-bold'>Qualification Progress</h1>
    {Certificate_Array.map((module) => 
    <Qualification_Percentage  module={module}/>)}
  </div>
  </div>
  )
}
