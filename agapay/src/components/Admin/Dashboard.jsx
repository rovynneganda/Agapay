import React from 'react'
import { ShieldExclamationIcon,UserGroupIcon,UserCircleIcon, ChatBubbleBottomCenterIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon,ChatBubbleOvalLeftEllipsisIcon,ClockIcon  } from '@heroicons/react/24/outline'
const AdminDashboard = () => {
  return (
   <>
                    <section className="bg-white min-h-screen sm:my-0 my-10">
        <div className="p-4 sm:ml-64">
        <h1 className='font-inter text-3xl mt-3'>Dashboard</h1>
        <hr className='border-primary mt-3 mb-3' />
          <div className="grid grid-cols-1 gap-5 sm:gap-5 sm:grid-cols-3 p-4 rounded-lg ">    
          <div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md">
    <UserGroupIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Total Users</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md">
    <UserCircleIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Total Admin</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md">
    <ClockIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Total Responders</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md ">
    <ShieldExclamationIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Total Incidents</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md">
    <ChatBubbleBottomCenterIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Total Response</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md">
    <ShieldCheckIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Total Resolution</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md">
    <ChatBubbleLeftRightIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">User Feedback</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md">
    <ChatBubbleOvalLeftEllipsisIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Average Response Time</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md">
    <ClockIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Average Resolution Time</p>
    </div>
</div>
          </div>
          {/* ANALYTICS */}
        </div>
        
      </section>
   </>
  )
}

export default AdminDashboard