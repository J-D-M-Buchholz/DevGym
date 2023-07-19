import React from "react"
import Image from "next/image"

export default function WhatWeDo_Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative inset-x-0 -z-10 left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <section className="text-center flex flex-col m-20">
        <p className="text-gray-600 font-bold text-xl my-5">{`WHAT WE DO ?`}</p>
        <div className="flex my-10 ">
          <h1 className="text-5xl font-bold w-2/3 text-gray-700 mx-3">
            We are a <span className="font-bold text-violet-700">DEV</span>{" "}
            team, providing places and exercises that make{" "}
            <span className="font-bold text-violet-700">CODE</span> easy for
            everyone.
          </h1>
          <Image
            src="/advancetools.png"
            alt="img"
            width={300}
            height={200}
            className="w-1/3 ovject-cover rounded-2xl "
          ></Image>
        </div>

        <p className="text-lg text-stone-800 my-12 font-bold">{`We offer workouts that are appropriate for all genders and ages. 
    It's hard at first, but watch your cord muscles get bigger and bigger!`}</p>
      </section>
    </div>
  )
}
