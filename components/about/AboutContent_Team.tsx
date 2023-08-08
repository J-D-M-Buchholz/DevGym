import Image from "next/image"
import Link from "next/link"

import Burhan from "@/public/burhan.png"
import Joel from "@/public/joel.png"
import Yasin from "@/public/yassin.png"
import Elias from "@/public/elias.png"
import Yeran from "@/public/yeran.png"

import {  FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"

export default function AboutContent_Team() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Our leadership
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Creative people</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-950 dark:border-gray-800">
          <div className="flex items-center gap-x-4">
            <Image
              className="rounded-full w-20 h-20"
              src={Burhan}
              alt="Burhan"
            />
            <div className="grow">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                Burhan Uzun
              </h3>
              <p className="text-xs uppercase text-gray-500">Founder / CEO</p>
            </div>
          </div>

          <p className="mt-3 text-gray-500">
            I am an ambitious workaholic, but apart from that, pretty simple
            person.
          </p>

          <div className="mt-3 space-x-1">
            <Link
              className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
              href="#"
            >
              <FaTwitter className="w-3.5 h-3.5" />
            </Link>

            <Link
              className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
              href="#"
            >
              <FaGithub className="w-3.5 h-3.5" />
            </Link>

            <Link
              className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
              href="#"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-950 dark:border-gray-800">
          <div className="flex items-center gap-x-4">
            <Image
              className="rounded-full w-20 h-20"
              src={Joel}
              alt="Joel"
            />
            <div className="grow">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                Joel Buchholz
              </h3>
              <p className="text-xs uppercase text-gray-500">Founder / CEO</p>
            </div>
          </div>

          <p className="mt-3 text-gray-500">
            I am an ambitious workaholic, but apart from that, pretty simple
            person.
          </p>

          <div className="mt-3 space-x-1">
            <Link
              className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
              href="#"
            >
              <FaTwitter className="w-3.5 h-3.5" />
            </Link>

            <Link
              className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
              href="#"
            >
              <FaGithub className="w-3.5 h-3.5" />
            </Link>

            <Link
              className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
              href="#"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-950 dark:border-gray-800">
          <div className="flex items-center gap-x-4">
            <Image
              className="rounded-full w-20 h-20"
              src={Yasin}
              alt="Yasin"
            />
            <div className="grow">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                Yasin Uzun
              </h3>
              <p className="text-xs uppercase text-gray-500">Founder / CEO</p>
            </div>
          </div>

          <p className="mt-3 text-gray-500">
            I am an ambitious workaholic, but apart from that, pretty simple
            person.
          </p>

          <div className="mt-3 space-x-1">
            <Link
              className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
              href="#"
            >
              <FaTwitter className="w-3.5 h-3.5" />
            </Link>

            <Link
              className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
              href="#"
            >
              <FaGithub className="w-3.5 h-3.5" />
            </Link>

            <Link
              className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
              href="#"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-950 dark:border-gray-800">
          <div className="flex items-center gap-x-4">
            <Image
              className="rounded-full w-20 h-20"
              src={Elias}
              alt="Elias"
            />
            <div className="grow">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                Elias El Herrera
              </h3>
              <p className="text-xs uppercase text-gray-500">Founder / CEO</p>
            </div>
          </div>

          <p className="mt-3 text-gray-500">
            I am an ambitious workaholic, but apart from that, pretty simple
            person.
          </p>

          <div className="mt-3 space-x-1">
            <Link
              className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
              href="#"
            >
              <FaTwitter className="w-3.5 h-3.5" />
            </Link>

            <Link
              className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
              href="#"
            >
              <FaGithub className="w-3.5 h-3.5" />
            </Link>

            <Link
              className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
              href="#"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-950 dark:border-gray-800">
          <div className="flex items-center gap-x-4">
            <Image
              className="rounded-full w-20 h-20"
              src={Yeran}
              alt="Yeran"
            />
            <div className="grow">
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                Yeran Kim
              </h3>
              <p className="text-xs uppercase text-gray-500">Founder / CEO</p>
            </div>
          </div>

          <p className="mt-3 text-gray-500">
            I am an ambitious workaholic, but apart from that, pretty simple
            person.
          </p>

          <div className="mt-3 space-x-1">
            <Link
              className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
              href="#"
            >
              <FaTwitter className="w-3.5 h-3.5" />
            </Link>

            <Link
              className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
              href="#"
            >
              <FaGithub className="w-3.5 h-3.5" />
            </Link>

            <Link
              className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
              href="#"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
