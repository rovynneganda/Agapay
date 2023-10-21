import React from 'react'
import { FireIcon, ArrowTrendingDownIcon, ExclamationTriangleIcon} from '@heroicons/react/24/outline';
import { flood } from '../assets';
const ResponderRecords = () => {
  return (
    <>
             <section className="bg-accent min-h-screen">
        <div className="p-4 sm:ml-64 mt-16">
        <h1 className='font-inter text-3xl mt-3'>Records</h1>
        <hr className='border-primary mt-3 mb-3' />
          <div className="grid grid-cols-1 gap-5 sm:gap-5 sm:grid-cols-4 p-4 rounded-lg ">    
<div class="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow ">
    <FireIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 class="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p class="mb-3 font-normal text-lg font-poppins text-gray"> Fire Reports</p>
    </div>
</div>
<div class="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow ">
    <img src={flood} className='w-7 h-7 text-primary' alt="" />
        <div className='mx-auto justify-center text-center'>
        <h5 class="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p class="mb-3 font-normal text-lg font-poppins text-gray"> Flood Reports</p>
    </div>
</div>
<div class="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow ">
    <ArrowTrendingDownIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 class="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p class="mb-3 font-normal text-lg font-poppins text-gray"> Earthquake Reports</p>
    </div>
</div>
<div class="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow ">
    <ExclamationTriangleIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 class="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p class="mb-3 font-normal text-lg font-poppins text-gray">Road Accidents</p>
    </div>
</div>
          </div>
          {/* TABLE PA KULANG DITO */}
        </div>
        
      </section>
    </>
  )
}

export default ResponderRecords