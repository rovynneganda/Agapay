import React from 'react'
import { FaceFrownIcon,ShieldCheckIcon,FireIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/20/solid'

const ReferHotlines = () => {
  return (
    <>
    


<div  tabIndex="-1" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0  left-0 bg-black bg-opacity-50 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-2xl max-h-full ">
  
        <div className="relative bg-white rounded-lg shadow  ">
        {/* border-red  border-[3px] */}
            <div className=" p-4 md:p-5 border-b border-gray/30 rounded-t ">
                <h3 className="sm:text-3xl text-2xl font-bold font-inter text-center capitalize">
                Outside our coverage area
                    <span>
                    <FaceFrownIcon className='w-8 h-8 inline-block ml-3 text-primary'/>
                  </span>
                </h3>
                {/* <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button> */}
            </div>
 
            <div className="p-5 md:p-5 space-y-3">
                <p className="text-xl leading-relaxed font-inter  font-medium ">
                It appears that your city is not within our jurisdiction. In case of emergency, please reach out to the appropriate local authorities or emergency services. 
                </p>
                <h1 className='font-inter text-xl font-semibold text-primary '>Here are some hotlines you can call for help</h1>
                <ul className='px-4 sm:px-7 font-inter font-medium space-y-2'>
                  <li> <GlobeAltIcon className='h-6 w-6 inline-block  mr-3 text-secondary'/>911 - National Emergency Hotline</li>
                  <li> <ShieldCheckIcon className='h-6 w-6 inline-block  mr-3 text-darkblue'/>117 - Philippine National Police</li>
                  <li> <FireIcon className='h-6 w-6 inline-block  mr-3 text-primary'/>117 | 3410-6319 - Bureau of Fire Protection</li>
                  <li> <HeartIcon className='h-6 w-6 inline-block  mr-3 text-red'/>143 | 8527-0000 - Philippine National Red Cross</li>

                </ul>
            </div>
            <p className="text-xl leading-relaxed font-inter p-5 font-medium ">Your safety is our priority, and we encourage you to contact the relevant local services for assistance.</p>
            <div className="flex items-center justify-center rounded-b pb-7">
                <button  type="button" className="text-white bg-red hover:bg-red/80 font-inter focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >Close</button>
              
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default ReferHotlines