import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
const ResponderReports = () => {
  return (
    <>
       <div className="p-4 sm:ml-64 mt-16 bg-accent min-h-screen">
       <h1 className="font-inter text-3xl mt-3">Reports</h1>
          <hr className="border-primary mt-3 mb-3" />

       <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
    <a className="group flex flex-col bg-white border border-gray/20 shadow-sm rounded-xl hover:shadow-md transition " href="#">
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="group-hover:text-primary font-semibold text-gray-800 font-inter">
              Joko Gadingan
            </h3>
            <p className="text-sm font-poppins">
            Travel Assistance
            </p>
          </div>
          <div className="pl-3">
            <ChevronRightIcon className='w-5 h-5'/>
          </div>
        </div>
      </div>
    </a>
      <a className="group flex flex-col bg-white border border-gray/20 shadow-sm rounded-xl hover:shadow-md transition " href="#">
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="group-hover:text-primary font-semibold text-gray-800 font-inter ">
              Joko Gadingan
            </h3>
            <p className="text-sm text-gray-500 font-poppins">
              Report Incident
            </p>
          </div>
          <div className="pl-3">
          <ChevronRightIcon className='w-5 h-5'/>
          </div>
        </div>
      </div>
    </a>
      <a className="group flex flex-col bg-white border border-gray/20 shadow-sm rounded-xl hover:shadow-md transition " href="#">
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="group-hover:text-primary font-semibold text-gray-800 font-inter">
              Joko Gadingan
            </h3>
            <p className="text-sm text-gray-500 font-poppins">
              Travel Assistance
            </p>
          </div>
          <div className="pl-3">
          <ChevronRightIcon className='w-5 h-5'/>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>


      </div>
    
    </>
  )
}

export default ResponderReports