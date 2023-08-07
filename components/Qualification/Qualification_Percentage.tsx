import React from "react"

import { Certificate_type } from "./Qualification"

type Props = { module: Certificate_type }

export default function Qualification_Percentage({ module }: Props) {
  return (
    <section className="flex flex-col w-1/2 m-4 p-4 border rounded-3xl">
      <h1 className="text-3xl font-bold m-2">{module.name} </h1>
      <div className="flex flex-col h-6 w-full bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-violet-400"
          style={{ width: `${module.progress}%` }}
        ><span className="ml-5 text-white font-bold">{module.progress}{`%`}</span></div>

      </div>
    </section>
  )
}
