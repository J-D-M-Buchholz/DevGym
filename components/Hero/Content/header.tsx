import React from 'react'
import Image from 'next/image'

export const Header = () => {
  return (
    <div className='pt-50 w-full'>
      <div className='flex flex-wrap items-end m-6'>
        <div className='col-lg-6 pt-100'>
          <span className="text-sm-bold color-gray-600 wow animate__ animate__fadeInUp animated" style={{visibility: "visible"}}>Welcome to DevGym!</span>
          <h1 className="text-black dark:text-slate-200 mt-20 mb-20 wow animate__ animate__fadeInUp animated" style={{visibility: "visible"}}>The next <div className="Typewriter"><span className="typewrite color-linear">Revolution!</span></div></h1>
          <div className="flex flex-wrap m-2"><div className="col-lg-9"><p className="text-base color-gray-600 wow animate__ animate__fadeInUp animated">Showcase your skills with practical development experience and land the coding career of your dreams.</p></div></div>
          <div className="box-subscriber mt-40 mb-50"><div className="inner-subscriber bg-gray-800"><form className="d-flex" action="#"><input className="input-sybscriber" type="text" placeholder="Type your email address"/><button className="btn btn-linear">Subscribe</button></form></div></div>
        </div>
        <div className='col-lg-6 text-center'>
          <div className='relative text-center'>
            <div className='pattern-1'>
              <Image
                src="pattern-1.svg"
                alt="pattern-1"
                width={40}
                height={40}
              ></Image>
            </div>
            <div className='pattern-2'>
              <Image
                src="pattern-2.svg"
                alt="pattern-2"
                width={40}
                height={40}
              ></Image>
            </div>
            <div className='pattern-3'>
              <Image
                src="pattern-3.svg"
                alt="pattern-3"
                width={40}
                height={40}
              ></Image>
            </div>
            <div className='pattern-4'>
              <Image
                src="pattern-4.svg"
                alt="pattern-4"
                width={40}
                height={40}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
