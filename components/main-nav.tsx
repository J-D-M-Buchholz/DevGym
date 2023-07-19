"use client";
import * as React from "react"
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import Image from "next/image"
import { Navbar } from "./navbar/Navbar"
import { useTheme } from "next-themes"


interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {

  const { theme } = useTheme();

  return (
    <div className="flex gap-6 md:gap-10">

      <Link href="/" className="flex items-center space-x-2">
      <Image
                      src={!theme || theme === "light" ? "/DevGym.svg" : "/DevWhite.png"}
                      width={40}
                      height={40}
                      alt="Logo"
                      style={{ color: "white" }}
                    />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>

      <Navbar />
    </div>
  )
}
