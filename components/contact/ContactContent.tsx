import React from 'react'
import { Email } from './content/email'
import { Reachout } from './content/reachout'


const ContactContent = () => {
  return (
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <div className='max-w-2xl lg:max-w-5xl mx-auto'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white'>Contact Us</h1>
          <p className='mt-1 text-gray-600 dark:text-gray-400'>How can we assist you?</p>
        </div>
        <div className='mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16'>
          <Email />
          <Reachout />
        </div>
      </div>
    </div>
  )
}

export default ContactContent