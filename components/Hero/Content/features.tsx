import React from "react"
import Image from "next/image"
import { LuUsers } from "react-icons/lu"
import { MdOutlineNotificationsActive } from "react-icons/md"
import { HiOutlineMailOpen } from "react-icons/hi"

export const Features = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <a href="#" className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex">
              
                <LuUsers className="mt-1 shrink-0 w-5 h-5 text-gray-800 dark:text-gray-200"/>


              <div className="grow ml-5">
                <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                  Ask our community
                </h3>
                <p className="text-sm text-gray-500">
                  Get help from 100+ DevGym members.
                </p>
              </div>
            </div>
          </div>
        </a>

        <a href="#" className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex">

                <MdOutlineNotificationsActive className="mt-1 shrink-0 w-5 h-5 text-gray-800 dark:text-gray-200" />


              <div className="grow ml-5">
                <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                  Stay Updated
                </h3>
                <p className="text-sm text-gray-500">
                  Turn on the notifications to keep you up to date.
                </p>
              </div>
            </div>
          </div>
        </a>

        <a href="#" className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <div className="flex">
              
              <HiOutlineMailOpen className="mt-1 shrink-0 w-5 h-5 text-gray-800 dark:text-gray-200"/>


              <div className="grow ml-5">
                <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                  Email us 
                </h3>
                <p className="text-sm text-gray-500">
                Reach us at <span className="text-blue-600 font-medium dark:text-blue-500">info@devgym.com</span>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
