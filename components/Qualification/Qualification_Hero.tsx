import Image from 'next/image'
import React from 'react'
import styles from './Qualification.module.css'

export default function Qualification_Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 ">
    <div
      className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true">
      <div
        className="relative inset-x-0 -z-10 left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
         style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }} 
      /> 
    </div>
    <section className='flex align-center justify-center items-center h-screen z-10  '>
        <div className='text-center bg-slate-100 rounded-md p-4 m-4 neumorphic-container shadow-lg'>
            <h1 className='text-4xl'>Have you <span>finished the module</span>{`?`} </h1>
            <h1 className='text-4xl'>Get the associated <span className='text-teal-700 font-bold'>CERTIFICATE</span> </h1>
        </div>
        <Image src='/about/about_certificate/1.png' alt='certificate image' width={500} height={400} className={`${styles.animateUpDown} rounded-full ml-10 `}  />
    </section>
    </div>
  )
}
