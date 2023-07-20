import React from "react"
import Image from "next/image"

import { Certificate_type } from "./Qualification"

type Props = { certificate: Certificate_type }

export default function Qualification_Card({ certificate }: Props) {
  return (
    <div className="">
      {certificate.compelete ? (
        <div className="flex flex-col items-center h-full bg-slate-100 rounded-lg overflow-hidden shadow-md hover:shadow-2xl p-6">
          <Image src={certificate.img} alt="img" width={100} height={100} />
          <p className="text-lg font-bold p-2">{certificate.name}</p>
          <p className="font-bold text-blue-500 border border-gray-200 rounded-xl p-2">
            {" "}
            Complete{" "}
          </p>
        </div>
      ) : (
        <div className="flex flex-col h-full items-center bg-black rounded-lg overflow-hidden shadow-md hover:shadow-2xl p-6 bg-opacity-10">
          <Image src={certificate.img} alt="img" width={100} height={100} />
          <p className="text-lg font-bold p-2">{certificate.name}</p>
          <p className=" font-bold text-red-500 border border-gray-200 rounded-xl p-2">
            Finish your Module first
          </p>
        </div>
      )}
    </div>
  )
}
