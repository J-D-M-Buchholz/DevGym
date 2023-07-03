import * as React from "react"
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import Image from "next/image"
import { Navbar } from "./navbar/Navbar"


interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">

      <Link href="/" className="flex items-center space-x-2">
      <Image
                      src="/Logo.svg"
                      width={40}
                      height={40}
                      alt="Logo"
                      style={{color: "white"}}
                    />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>

      <Navbar />
    </div>
  )
}
