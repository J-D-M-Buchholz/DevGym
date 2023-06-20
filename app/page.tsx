import Link from "next/link"
import React from "react"
import Dashboard from "@/components/Dashboard/Dashboard"

import Hero from "@/components/Hero/Hero"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex w-full flex-col items-start gap-2">
        <Hero />
        <Dashboard />
      </div>
    </section>
  )
}
