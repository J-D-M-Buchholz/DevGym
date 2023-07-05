import React from "react"
import Hero from "@/components/Hero/Hero"
import { ContactContent } from "@/components/contact/ContactContent"


export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex w-full flex-col items-start gap-2">
        <Hero />
        <ContactContent />
        {/* <Dashboard /> */}
        
      </div>
    </section>
  )
}
