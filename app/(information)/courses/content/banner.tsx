import React from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

const Banner = () => {
  return (
    <Link className="group block bg-gray-100 hover:bg-gray-200 p-4 rounded-md text-center transition-all duration-300 dark:bg-white/[.03] dark:hover:bg-white/[.075]" href="#">
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <p className="mr-2 inline-block text-sm text-gray-800 dark:text-gray-200">
            All Courses are on 50% Sale.
          </p>
          <span className="group-hover:underline decoration-2 inline-flex justify-center items-center gap-x-2 font-semibold text-blue-600 text-sm dark:text-blue-500">
            Go to Courses
            <IoIosArrowForward className='w-4 h-auto' />
          </span>
        </div>
    </Link>
  )
}

export default Banner