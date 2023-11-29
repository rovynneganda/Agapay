import React from 'react'
import { ExclamationTriangleIcon,MapPinIcon,ChartBarIcon,MegaphoneIcon } from '@heroicons/react/20/solid'

const LandslideAlert = () => {
  return (
    <>
    


    <div  tabindex="-1" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bg-black bg-opacity-50 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
      
            <div className="relative bg-white rounded-lg shadow ">
    
                <div className=" p-4 md:p-5 border-b border-gray/30 rounded-t ">
                    <h3 className="text-3xl font-bold font-inter text-center">
                        Landslide Alert
                        <span>
                        <ExclamationTriangleIcon className='w-8 h-8 inline-block ml-3 text-red'/>
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
                    <p className="text-xl leading-relaxed font-inter text-center font-medium ">
                    We regret to inform you that there is a Landslide alert in your area.
                    </p>
                    <div>
                    <h1 className='font-inter text-lg font-medium tracking-wide'> <span><MapPinIcon className='w-5 mb-1 h-5 inline-block text-primary mr-2'/></span>Location: <span className='font-inter text-lg '>1774 zenia st</span></h1>
                    <h1 className='font-inter text-lg font-medium tracking-wide'><span><ChartBarIcon className='w-5 mb-1 h-5 inline-block text-primary mr-2'/></span>Severity: <span className='font-inter text-lg'>Severe</span></h1>
                    <h1 className='font-inter text-lg font-medium tracking-wide'><span><MegaphoneIcon className='w-5 mb-1 h-5 inline-block text-primary mr-2'/></span>Current Status: <span className='font-inter text-lg'>Ongoing</span> </h1>
                    </div>
                    <h1 className='font-inter text-xl font-semibold text-primary'>Recommended Actions</h1>
                    <ul className='list-decimal px-4 sm:px-7 font-inter font-medium '>
                      <li> Evacuate immediately if you are in a high-risk area or if instructed to do so by local authorities.</li>
                      <li>Avoid areas susceptible to landslides, such as steep slopes and hills.</li>
                      <li>If you are indoors, move to a lower floor or a sturdy, reinforced part of the building.</li>
                      <li>Keep away from rivers and streams that may be prone to flash floods caused by landslides.</li>
                      <li>Stay tuned to local news and emergency services for updates and instructions.</li>
                    </ul>
                    <p className="text-xl leading-relaxed font-inter text-center font-medium ">  Stay tuned for further updates.</p>
                </div>
         
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

export default LandslideAlert