import React from 'react'
import {phoneMockUp } from '../../assets'
import { ArrowSmallDownIcon } from '@heroicons/react/24/outline'
const DownloadBanner = () => {
  return (
  <>
<div className="relative overflow-hidden pb-10">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gradient-to-b from-graybg via-gray/5 rounded-xl">
    <div className="max-w-2xl text-center mx-auto">
      <h1 className="block sm:text-4xl text-2xl font-semibold  font-inter">Emergency Readiness?</h1>
      <p className="block sm:text-3xl text-2xl font-semibold  font-poppins leading-loose text-primary">Download the app now!</p>
    
    </div>
    <button className="relative group overflow-hidden pl-6 h-12 mt-3 flex space-x-6 items-center bg-primary mx-auto rounded-xl">
          <span className="relative uppercase text-base font-medium text-white font-poppins">Download</span>
          <div aria-hidden="true" className="w-14 bg-primarydark transition duration-300 -translate-y-7 group-hover:translate-y-7">
              <div className="h-14 flex">
                <ArrowSmallDownIcon className='text-white w-8 h-8 m-auto'/>
              </div>
              <div className="h-14 flex">
              <ArrowSmallDownIcon className='text-white w-8 h-8 m-auto'/>
              </div>
          </div>
        </button>
    <div className="mt-10 relative max-w-5xl mx-auto">
      <div className="w-full object-cover h-full  bg-no-repeat bg-center bg-cover rounded-xl"> <img src={phoneMockUp} alt="" /></div>

    

      <div className="absolute bottom-12 -left-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary to-white p-px rounded-lg ">
        <div className="bg-white w-48 h-48 rounded-lg "></div>
      </div>

      <div className="absolute -top-12 -right-20 -z-[1] w-48 h-48 bg-gradient-to-t from-blue to-darkblue p-px rounded-full">
        <div className="bg-white w-48 h-48 rounded-full dark:bg-slate-900"></div>
      </div>
    </div>
  </div>
  </div>
</>
  )
}

export default DownloadBanner