"use client"

import React from "react"
import Link from "next/link"

import { FaHtml5, FaCss3,  } from "react-icons/fa"
import { RiJavascriptFill } from "react-icons/ri"

const AboutContent_Hero = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-950 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
            <FaHtml5 className="w-28 h-28 text-white" />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
              HTML
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
              Hypertext Markup Language
            </h3>
            <p className="mt-3 text-gray-500">
              HTML is a text-based approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <Link
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-950 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              View Projects
            </Link>
            <Link
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-950 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              Get started
            </Link>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-950 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="h-52 flex flex-col justify-center items-center bg-rose-500 rounded-t-xl">
            <FaCss3 className="w-28 h-28 text-white" />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500">
              CSS
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
              Cascading Style Sheets
            </h3>
            <p className="mt-3 text-gray-500">
             CSS is a computer language for laying out and structuring web pages HTML or XML. This language contains coding elements and is composed of these “cascading style sheets” which are equally called CSS files
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <Link
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-950 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              View Projects
            </Link>
            <Link
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-950 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              Get started
            </Link>
          </div>
        </div>

        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-950 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl">
            <RiJavascriptFill className="w-28 h-28 text-white" />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
              JS
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
              JavaScript
            </h3>
            <p className="mt-3 text-gray-500">
              JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <Link
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-950 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              View Projects
            </Link>
            <Link
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-950 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              Get started
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutContent_Hero
