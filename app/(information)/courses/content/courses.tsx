import React from "react"
import Link from "next/link"
import Image from "next/image"

const Courses = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          className="group rounded-xl p-5 transition-all dark:bg-white/[.03] dark:hover:bg-white/[.075] bg-gray-100 hover:bg-gray-200"
          href="/courses/html"
        >
          <div className="aspect-w-16 aspect-h-10">
            <Image
              className="w-full object-cover rounded-xl"
              src="/html.png"
              alt="Image Description"
              width={640}
              height={400}
            />
          </div>
          <h1 className="mt-5 text-[1.5rem] text-gray-800 dark:text-gray-300 dark:group-hover:text-white">HTML</h1>
          <h3 className="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veritatis iure ad odio animi sit vero suscipit eaque libero aspernatur?
          </h3>
          <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
            Learn more
            <svg
              className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                fill="currentColor"
              />
            </svg>
          </p>
        </Link>
        <Link
          className="group rounded-xl p-5 transition-all dark:bg-white/[.03] dark:hover:bg-white/[.075] bg-gray-100 hover:bg-gray-200"
          href="/courses/css"
        >
          <div className="aspect-w-16 aspect-h-10">
            <Image
              className="w-full object-cover rounded-xl"
              src="/css.png"
              alt="Image Description"
              width={640}
              height={400}
            />
          </div>
          <h1 className="mt-5 text-[1.5rem] text-gray-800 dark:text-gray-300 dark:group-hover:text-white">CSS</h1>
          <h3 className="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veritatis iure ad odio animi sit vero suscipit eaque libero aspernatur?
          </h3>
          <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
            Learn more
            <svg
              className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                fill="currentColor"
              />
            </svg>
          </p>
        </Link>
        <Link
          className="group rounded-xl p-5 transition-all dark:bg-white/[.03] dark:hover:bg-white/[.075] bg-gray-100 hover:bg-gray-200"
          href="/courses/js"
        >
          <div className="aspect-w-16 aspect-h-10">
            <Image
              className="w-full object-cover rounded-xl"
              src="/javascript.png"
              alt="Image Description"
              width={640}
              height={400}
            />
          </div>
          <h1 className="mt-5 text-[1.5rem] text-gray-800 dark:text-gray-300 dark:group-hover:text-white">JavaScript</h1>
          <h3 className="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga veritatis iure ad odio animi sit vero suscipit eaque libero aspernatur?
          </h3>
          <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
            Learn more
            <svg
              className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                fill="currentColor"
              />
            </svg>
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Courses
