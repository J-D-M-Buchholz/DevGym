import React from 'react'
import { AiOutlineQuestionCircle, AiOutlineApi } from 'react-icons/ai'
import { LuFormInput } from 'react-icons/lu'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { BsArrowRightShort } from 'react-icons/bs'
import Link from 'next/link'

export const Reachout = () => {
  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-800'>
        <div className='flex gap-x-7 py-6'>
            <AiOutlineQuestionCircle className='flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200'/>
            <div>
                <h3 className='font-semibold text-gray-800 dark:text-gray-200'>Knowledgebase</h3>
                <p className='mt-1 text-sm text-gray-500'>We're here to help with any questions or code.</p>
                <Link href='#' className='mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'>Contact Support <BsArrowRightShort className='w-7 h-7 transition ease-in-out group-hover:translate-x-1'/></Link>
            </div>
        </div>

        <div className='flex gap-x-7 py-6'>
            <LuFormInput className='flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200'/>
            <div>
                <h3 className='font-semibold text-gray-800 dark:text-gray-200'>FAQ</h3>
                <p className='mt-1 text-sm text-gray-500'>Search our FAQ for answers to anything you might ask.</p>
                <Link href='#' className='mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'>Visit FAQ <BsArrowRightShort className='w-7 h-7 transition ease-in-out group-hover:translate-x-1'/></Link>
            </div>
        </div>

        <div className='flex gap-x-7 py-6'>
            <AiOutlineApi className='flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200'/>
            <div>
                <h3 className='font-semibold text-gray-800 dark:text-gray-200'>Developer API</h3>
                <p className='mt-1 text-sm text-gray-500'>Check out our development quickstart guide.</p>
                <Link href='#' className='mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'>Contact Sales <BsArrowRightShort className='w-7 h-7 transition ease-in-out group-hover:translate-x-1'/></Link>
            </div>
        </div>

        <div className='flex gap-x-7 py-6'>
            <HiOutlineMailOpen className='flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200'/>
            <div>
                <h3 className='font-semibold text-gray-800 dark:text-gray-200'>Contact us by email</h3>
                <p className='mt-1 text-sm text-gray-500'>If you wish to write us an email instead please use</p>
                <Link href='#' className='mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'>info@devgym.com</Link>
            </div>
        </div>

    </div>
  )
}
