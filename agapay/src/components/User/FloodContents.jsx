import React from 'react'
import { logo, persuade1, persuade2,persuade3 } from "../../assets";
import { FaceSmileIcon, ShieldCheckIcon,InboxStackIcon,ExclamationCircleIcon, CheckIcon } from '@heroicons/react/24/outline';
const FloodContents = () => {
  return (
    <section className='bg-subtlegray'>
    <div className=' py-10 p-5'> 
    <div className="max-w-[85rem] mx-auto w-full   ">
    <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
      <div className="lg:col-span-3">
        <h1 className="block text-3xl font-bold  sm:text-4xl md:text-5xl lg:text-6xl text-darkblue/70  font-inter  ">Flood</h1>
        <p className="mt-3 text-lg font-poppins ">   A flood is an overflow of water that submerges land that
                      is usually dry. Floods can occur due to various factors,
                      including heavy rainfall, snowmelt, storm surges, or the
                      failure of dams or levees.
               </p>
               <p className='font-poppins mt-3 text-lg'>  Floods are a
                      natural part of the Earth's hydrological cycle, but their
                      impact can be mitigated through proper planning,
                      infrastructure, and disaster preparedness measures.</p>
      </div>
      <div className="lg:col-span-4 mt-10 lg:mt-0 mx-auto">
        <img className="w-full max-w-lg  rounded-xl" src="https://dummyimage.com/720x600" alt="Image Description"/>
      </div>
    </div>
  </div>
  </div>
  <section className="">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
      <h2 className="mb-4 text-4xl tracking-tight font-semibold font-inter  text-darkblue/70">
      What Are the Common Causes of Floods?
      </h2>
      {/* <p className="mb-5 font-light text-black sm:text-xl font-poppins">
      Simplifying Reporting and Assistance Access.
      </p> */}
    </div>
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 sm:gap-6 lg:gap-8 xl:gap-10">
    <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 " >
        <img src={persuade2} alt="Icon" className=" w-56 mx-auto " />
       <div>
       <h3 className="mb-4 text-2xl font-semibold font-inter">      Heavy Rainfall</h3>
        <p className="text-md font-poppins text-gray/90">
        Intense or prolonged rainfall can lead to saturation
                          of the soil and overflowing rivers or streams.
        </p>
       </div>
      </div>

      <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 " >
        <img src={persuade3} alt="Icon" className="w-56  mx-auto  " />
       <div>
        <h3 className="mb-4 text-2xl font-semibold font-inter">   Dam or Levee Failures</h3>
        <p className="text-md font-poppins text-gray/90">
        Failure or breach of dams, levees, or other water
                          control structures can result in rapid and extensive
                          flooding downstream.
        </p>
        </div>
      </div>

      <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 " >
        <img src={persuade1} alt="Icon" className="w-56   mx-auto  " />
       <div>
        <h3 className="mb-4 text-2xl font-semibold font-inter">  Deforestation</h3>
        <p className="text-md font-poppins text-gray/90">
        Removal of trees and vegetation reduces soil stability
                          and absorption, increasing the likelihood of runoff
                          and flooding.
        </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="font-inter ">
<div className="container mx-auto flex  pt-10 items-center justify-center flex-col">
<img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
<div className="text-center lg:w-2/3 w-full">
<h1 className=" sm:text-4xl text-3xl mb-4 font-semibold  font-inter text-darkblue/70 ">   What Are the Immediate Actions to Take After a Flood
                        Occurs?</h1>
<p className="mb-8 leading-relaxed font-poppins text-lg">   Wear appropriate protective gear such as gloves,
                          masks, and boots before entering your home. Remove
                          water and mud from your home to prevent further
                          damage. Use pumps, wet vacs, and dehumidifiers to dry
                          out the affected area. Dispose of contaminated items
                          that cannot be cleaned and disinfected.</p>
</div>
</div>
</section>
<section className="font-inter ">
<div className="container px-5 py-24 mx-auto  flex flex-wrap">
<h2 className="mb-4 text-4xl tracking-tight font-semibold font-inter  text-darkblue/70 mx-auto text-center">
How Can Communities Work Together to Mitigate Flood
                        Risks?
      </h2>
<div className="flex lg:flex-row  md:flex-col sm:flex-col flex-col lg:gap-10 gap-0 w-full justify-center items-center">
<div className="lg:w-1/2 md:w-full ">
  <div className="flex relative pb-12">
    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-darkblue/70  pointer-events-none"></div>
    </div>
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-darkblue   inline-flex items-center justify-center text-white relative z-0">
     <FaceSmileIcon className='h-5 w-5'/>
  
    </div>
    <div className="flex-grow pl-4">
 <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-darkblue/70  ">   Floodplain Management</h2> 
      <p className="leading-relaxed font-poppins">  Develop and enforce land use regulations that restrict
                          construction in flood-prone areas. Preserve and
                          restore natural floodplains, wetlands, and green
                          spaces, which act as natural buffers against flooding.</p>
    </div>
  </div>
  <div className="flex relative pb-12">
    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-darkblue/70  pointer-events-none"></div>
    </div>
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-darkblue   inline-flex items-center justify-center text-white relative z-0">
     <ShieldCheckIcon className='h-5 w-5'/>
    </div>
    <div className="flex-grow pl-4">
    <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-darkblue/70  ">   Early Warning Systems.</h2> 
      <p className="leading-relaxed font-poppins">  Establish and maintain early warning systems to alert
                          residents about impending floods. Utilize sirens, text
                          alerts, social media, and other communication channels
                          to disseminate timely information.</p>
    </div>
  </div>
  <div className="flex relative pb-12">
    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-darkblue/70  pointer-events-none"></div>
    </div>
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-darkblue   inline-flex items-center justify-center text-white relative z-0">
      <ExclamationCircleIcon className='w-5 h-5' />
    </div>
    <div className="flex-grow pl-4">
    <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-darkblue/70  ">   Community Education.</h2> 
      <p className="leading-relaxed font-poppins">     Conduct public awareness campaigns to educate
                          residents about flood risks, preparedness, and
                          evacuation plans. Provide resources like brochures and
                          workshops to inform residents about flood insurance
                          and safety measures.</p>
    </div>
  </div>
  <div className="flex relative pb-12">
    {/* <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-gray pointer-events-none"></div>
    </div> */}
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-darkblue   inline-flex items-center justify-center text-white relative z-0">
      <InboxStackIcon className='w-5 h-5'/>
    </div>
    <div className="flex-grow pl-4">
    <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-darkblue/70  ">      Ecosystem Restoration.</h2> 
      <p className="leading-relaxed font-poppins">    Invest in ecosystem restoration projects, including
                          reforestation and wetland restoration. Healthy
                          ecosystems absorb rainwater, reduce erosion, and
                          mitigate flooding.</p>
    </div>
  </div>
  {/* <div className="flex relative">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-darkblue/70   inline-flex items-center justify-center text-white relative z-0">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>
    </div>
    <div className="flex-grow pl-4">
    <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-landslide  ">  Don't Re-enter.</h2> 
      <p className="leading-relaxed"> Once you have safely exited, do not re-enter the
                    building for any reason. Wait for emergency responders
                    to arrive.</p>
    </div>
  </div> */}
</div>
<div className="">
        <img className="w-full max-w-lg  rounded-xl" src="https://dummyimage.com/720x600" alt="Image Description"/>
      </div>
</div>

</div>
</section>
{/* <!-- Features --> */}
<div >
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto font-inter  ">
  {/* <!-- Grid --> */}
  <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
    <div className="lg:col-span-7">
      {/* <!-- Grid --> */}
      <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
        <div className="col-span-4">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80" alt="Image Description"/>
        </div>
        {/* <!-- End Col --> */}

        <div className="col-span-3">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description"/>
        </div>
        {/* <!-- End Col --> */}

        <div className="col-span-5">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description"/>
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
    {/* <!-- End Col --> */}

    <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
      <div className="space-y-6 sm:space-y-8">
        {/* <!-- Title --> */}
        <div className="space-y-2 md:space-y-4">
          <h2 className="font-bold text-3xl lg:text-4xl  text-darkblue/70 ">
          What Should Residents Include in Their Emergency Flood
                        Kit?
          </h2>
          {/* <p className="">
            Use our tools to explore your ideas and make your vision come true. Then share your work easily.
          </p> */}
        </div>
        {/* <!-- End Title -->

        <!-- List --> */}
        <ul role="list" className="space-y-2 sm:space-y-4">
          <li className="flex space-x-3">
            {/* <!-- Solid Check --> */}
            <div className='bg-gray/20 rounded-full flex-shrink-0 w-6 h-6 flex items-center justify-center'>
            <CheckIcon className='w-5 h-5 text-black '/>
            </div>
            {/* <!-- End Solid Check --> */}

            <span className="text-sm sm:text-base ">
              <span className="font-bold font-poppins">  A seven-day supply  </span> – of prescription medications and any
                          necessary medical supplies.
            </span>
          </li>

          <li className="flex space-x-3">
            {/* <!-- Solid Check --> */}
            <div className='bg-gray/20 rounded-full flex-shrink-0 w-6 h-6 flex items-center justify-center'>
            <CheckIcon className='w-5 h-5 text-black '/>
            </div>
            {/* <!-- End Solid Check --> */}

            <span className="text-sm sm:text-base  font-poppins">
            One gallon of water per person per day for at least
                          three days, for drinking and sanitation.
            </span>
          </li>

          <li className="flex space-x-3">
            {/* <!-- Solid Check --> */}
          <div className='bg-gray/20 rounded-full flex-shrink-0 w-6 h-6 flex items-center justify-center'>
            <CheckIcon className='w-5 h-5 text-black '/>
            </div>
            {/* <!-- End Solid Check --> */}

            <span className="text-sm sm:text-base  font-poppins">
            A three-day supply of non-perishable food items such
                          as 
                           <span className="font-bold"> canned goods, granola bars, dried fruits, and nuts.</span>
            </span>
          </li>
        </ul>
        {/* <!-- End List --> */}
      </div>
    </div>
    {/* <!-- End Col --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Features --> */}
</div>
</section>
  )
}

export default FloodContents