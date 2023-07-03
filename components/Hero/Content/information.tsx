"use client"

import React, { useState } from "react"
import Image from "next/image"
import { ImPower } from "react-icons/im"
import { MdOutlineNotificationsActive, MdSpaceDashboard } from "react-icons/md"

export const Information = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = (tabId: React.SetStateAction<number>) => {
    setActiveTab(tabId)
  }
  return (
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl text-gray-800 dark:text-gray-200 font-bold sm:text-3xl">
                Fully customizable rules to match your unique needs
              </h2>

              <nav
                className="grid gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
              >
                <button
                  type="button"
                  className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 ${
                    activeTab === 1 ? "active" : ""
                  }`}
                  id="tabs-with-card-item-1"
                  data-hs-tab="#tabs-with-card-1"
                  aria-controls="tabs-with-card-1"
                  role="tab"
                  onClick={() => handleTabClick(1)}
                >
                  <span className="flex">
                    <MdOutlineNotificationsActive className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200" />
                    <span className="grow ml-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                        Advanced tools
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                        Use Preline thoroughly thought and automated libraries
                        to manage your businesses.
                      </span>
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 ${
                    activeTab === 2 ? "active" : ""
                  }`}
                  id="tabs-with-card-item-2"
                  data-hs-tab="#tabs-with-card-2"
                  aria-controls="tabs-with-card-2"
                  role="tab"
                  onClick={() => handleTabClick(2)}
                >
                  <span className="flex">
                    <MdSpaceDashboard className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200" />
                    <span className="grow ml-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                        Smart dashboard
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                        Quickly DevGym sample components, Live-Coding, and
                        friendly navigation.
                      </span>
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 ${
                    activeTab === 3 ? "active" : ""
                  }`}
                  id="tabs-with-card-item-3"
                  data-hs-tab="#tabs-with-card-3"
                  aria-controls="tabs-with-card-3"
                  role="tab"
                  onClick={() => handleTabClick(3)}
                >
                  <span className="flex">
                    <ImPower className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200" />
                    <span className="grow ml-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                        Powerful features
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                        Reduce time and effort on building modern Website
                        designs with DevGym only.
                      </span>
                    </span>
                  </span>
                </button>
              </nav>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div>
                  <div
                    id="tabs-with-card-1"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-1"
                    className={activeTab === 1 ? "" : "hidden"}
                  >
                    <Image
                      src="/one.png"
                      alt="Tools"
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                      width={987}
                      height={1220}
                    />
                  </div>

                  <div
                    id="tabs-with-card-2"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-2"
                    className={activeTab === 2 ? "" : "hidden"}
                  >
                    <Image
                      src="/two.png"
                      alt="Tools"
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                      width={987}
                      height={1220}
                    />
                  </div>

                  <div
                    id="tabs-with-card-3"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-3"
                    className={activeTab === 3 ? "" : "hidden"}
                  >
                    <Image
                      src="/three.png"
                      alt="Tools"
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                      width={987}
                      height={1220}
                    />
                  </div>
                </div>
                <div className="hidden absolute top-0 right-0 translate-x-20 md:block lg:translate-x-20">
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
              </div>
            </div>
          </div>

          <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-slate-900"></div>
          </div>
        </div>
      </div>
  )
}
