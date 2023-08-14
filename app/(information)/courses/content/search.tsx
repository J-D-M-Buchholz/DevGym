import React from "react"
import {
  BiLogoAngular,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiSearchAlt,
} from "react-icons/bi"
import { TbBrandNextjs } from "react-icons/tb"

const Search = () => {
  return (
    <div className="realtive overflow-hidden">
      <div className="max-w-[85rem] mx-auto sm:px-6 lg:px-8 py-10 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200">
            Courses
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Ditch Theory-Driven Courses and Enter the World of a True Developer
          </p>

          <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
            <form>
              <div className="relative z-10 flex space-x-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                <div className="w-[32rem]">
                  <label
                    htmlFor="hs-search-courses-1"
                    className="block text-sm text-gray-700 font-medium dark:text-white"
                  >
                    <span className="sr-only">Search courses</span>
                  </label>
                  <input
                    type="email"
                    name="hs-search-courses-1"
                    id="hs-search-courses-1"
                    className="p-4 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-400"
                    placeholder="Search courses"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <a
                    className="p-2 justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    href="#"
                  >
                    <BiSearchAlt className="w-5 h-auto" />
                  </a>
                </div>
              </div>
            </form>
            <div className="hidden md:block absolute top-0 right-0 -translate-y-12 translate-x-20">
              <svg
                className="w-16 h-auto text-orange-500"
                width="121"
                height="135"
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="hidden md:block absolute bottom-0 left-0 translate-y-10 -translate-x-32">
              <svg
                className="w-40 h-auto text-cyan-500"
                width="347"
                height="188"
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="mt-10 sm:mt-20">
            <a
              className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              <BiLogoHtml5 className="w-5 h-auto" />
              HTML
            </a>
            <a
              className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              <BiLogoCss3 className="w-5 h-auto" />
              CSS
            </a>
            <a
              className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              <BiLogoJavascript className="w-5 h-auto" />
              JavaScript
            </a>
            <a
              className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              <BiLogoAngular className="w-5 h-auto" />
              Angular
            </a>
            <a
              className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              <BiLogoReact className="w-5 h-auto" />
              React
            </a>
            <a
              className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              <TbBrandNextjs className="w-5 h-auto" />
              NextJS
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
