import React from "react"
import { AiOutlineFileText } from "react-icons/ai"
import { GoThumbsup } from "react-icons/go"
import { HiOutlineChat } from "react-icons/hi"

export const AboutContent_Sec_Section = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="lg:w-3/4">
          <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
            Experience the power of DevGym
          </h2>
          <p className="mt-3 text-gray-800 dark:text-gray-400">
            We help our Customers bring ideas to life in the digital world, by
            designing and implementing the technology tools that they need to
            win.
          </p>
          <p className="mt-5 inline-flex items-center gap-x-2 font-medium text-blue-600 dark:text-blue-500">
            Contact us to learn more
          </p>
        </div>

        <div className="space-y-6 lg:space-y-10">
          <div className="flex">
            <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-950 dark:border-gray-700 dark:text-gray-200">
              <AiOutlineFileText className="w-5 h-5" />
            </span>
            <div className="ml-5 sm:ml-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Industry-leading documentation
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Our documentation and extensive Client libraries contain
                everything a Customer needs to build a custom integration in a
                fraction of the time.
              </p>
            </div>
          </div>

          <div className="flex">
            <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-950 dark:border-gray-700 dark:text-gray-200">
              <HiOutlineChat className="w-5 h-5" />
            </span>
            <div className="ml-5 sm:ml-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Developer community support
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                We actively contribute to open-source projects—giving back to
                the community through development, patches, and sponsorships.
              </p>
            </div>
          </div>

          <div className="flex">
            <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-950 dark:border-gray-700 dark:text-gray-200">
              <GoThumbsup className="w-5 h-5" />
            </span>
            <div className="ml-5 sm:ml-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Simple and affordable
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                From boarding passes to movie tickets, there's pretty much
                nothing you can't store with DevGym.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
