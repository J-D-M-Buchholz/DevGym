
import Link from 'next/link'
import React from 'react'

export default function AbountContent_Hero() {
  return (
    <div className='bg-white'>
        {/* Background */}
       <div className="relative isolate px-6 pt-14 lg:px-8 ">
         <div
           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
           aria-hidden="true">
           <div
             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
             style={{
               clipPath:
                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
             }}
           /> 
         </div>

        {/* Text section */}
         <section className='flex flex-col align-center justify-center text-center mt-24 0'>
            <Link href='/contact' className='text-sm rounded-full border border-gray-300 mx-auto p-3 mt-20'> Online coding fitness for you <span className='text-blue-700 font-bold'>More Details</span> </Link> 
             <h1 className='text-7xl font-bold my-10'> Challenge yourself with Devgym. </h1>
             <p className='mt-8 mb-24 text-gray-500'>Dream your perfekt code muscles</p>
             <div className='justify-center my-20'>
                <Link href='/' className='m-4 bg-violet-700 text-white p-3 hover:bg-violet-500 rounded-md font-bold'> Get Started </Link>
                <Link href='/' className='m-4 bg-green-700 text-white p-3 hover:bg-green-600 rounded-md font-bold'> More Details </Link>
             </div>
            
        </section>

       </div>
    </div>
  )
}
