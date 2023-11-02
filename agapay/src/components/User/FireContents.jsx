import React from 'react'
import { logo, persuade1, persuade2,persuade3 } from "../../assets";
import { BellAlertIcon, ArrowLeftOnRectangleIcon,ArrowSmallDownIcon,ExclamationCircleIcon, CheckIcon } from '@heroicons/react/24/outline';
const FireContents = () => {
  return (
    <>
    <section className='bg-subtlegray'>
    <div className=' py-10 p-5'> 
    <div className="max-w-[85rem] mx-auto w-full   ">
    <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
      <div className="lg:col-span-3">
        <h1 className="block text-3xl font-bold  sm:text-4xl md:text-5xl lg:text-6xl text-red font-inter  ">Fire</h1>
        <p className="mt-3 text-lg font-poppins ">Fire is a natural phenomenon that occurs when a
                combustible material reacts with an oxidizing agent,
                usually oxygen, in the presence of heat. It releases
                energy in the form of light and heat. 
               </p>
               <p className="mt-3 text-lg font-poppins "> Fires can occur in
                various environments and are essential for human survival
                as they provide warmth, light, and a means for cooking. </p>
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
      <h2 className="mb-4 text-4xl tracking-tight font-semibold font-inter text-red/80 ">
      What are the common causes of fires?
      </h2>
      {/* <p className="mb-5 font-light text-black sm:text-xl font-poppins">
      Simplifying Reporting and Assistance Access.
      </p> */}
    </div>
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 sm:gap-6 lg:gap-8 xl:gap-10">
    <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 " >
        <img src={persuade2} alt="Icon" className=" w-56 mx-auto " />
       <div>
       <h3 className="mb-4 text-2xl font-semibold font-inter">Electrical Faults</h3>
        <p className="text-md font-poppins text-gray/90">
        Malfunctioning electrical systems and appliances can
                    lead to short circuits and fires.
        </p>
       </div>
      </div>

      <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 " >
        <img src={persuade3} alt="Icon" className="w-56  mx-auto  " />
       <div>
        <h3 className="mb-4 text-2xl font-semibold font-inter">Open Flames</h3>
        <p className="text-md font-poppins text-gray/90">
        Unattended candles, matches, or lit gas stoves can
                    easily ignite nearby materials.
        </p>
        </div>
      </div>

      <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 " >
        <img src={persuade1} alt="Icon" className="w-56   mx-auto  " />
       <div>
        <h3 className="mb-4 text-2xl font-semibold font-inter">Smoking</h3>
        <p className="text-md font-poppins text-gray/90">
        Improperly discarded cigarettes or careless smoking
                    can cause fires, especially in dry conditions.
        </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="font-inter ">
<div className="container mx-auto flex  pt-10 items-center justify-center flex-col">
<img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
<div className="text-center lg:w-2/3 w-full p-5">
<h1 className="sm:text-4xl text-3xl mb-4 font-semibold  font-inter text-red">Why store and dispose of flammable materials properly?</h1>
<p className="mb-8 leading-relaxed font-poppins text-lg">Flammable materials can easily catch fire and
                    contribute to the rapid spread of flames. Proper
                    storage ensures that these materials are kept in
                    designated areas away from potential ignition sources,
                    reducing the risk of fires.</p>
</div>
</div>
</section>
<section className="font-inter ">
<div className="container px-5 py-24 mx-auto  flex flex-wrap">
<h2 className="mb-4 sm:text-4xl text-3xl tracking-tight font-semibold font-inter text-red/80 mx-auto text-center">
How should people exit buildings during a fire?
      </h2>
<div className="flex lg:flex-row  md:flex-col sm:flex-col flex-col lg:gap-10 gap-0 w-full justify-center items-center">
<div className="lg:w-1/2 md:w-full ">
  <div className="flex relative pb-12">
    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-gray pointer-events-none"></div>
    </div>
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red inline-flex items-center justify-center text-white relative z-0">
     <BellAlertIcon className='h-5 w-5'/>
  
    </div>
    <div className="flex-grow pl-4">
 <h2 className="font-semibold  text-lg  mb-1 tracking-wider text-red">  Alert Others.</h2> 
      <p className="leading-relaxed font-poppins text-base"> If you discover a fire, immediately alert others by
                    shouting "Fire!" or activating the building's fire
                    alarm system, if available.</p>
    </div>
  </div>
  <div className="flex relative pb-12">
    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-gray pointer-events-none"></div>
    </div>
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red inline-flex items-center justify-center text-white relative z-0">
     <ArrowLeftOnRectangleIcon className='h-5 w-5'/>
    </div>
    <div className="flex-grow pl-4">
    <h2 className="font-semibold  text-lg  mb-1 tracking-wider text-red"> Check Doors.</h2> 
      <p className="leading-relaxed font-poppins text-base">Before opening a door, use the back of your hand to
                    touch it, its doorknob, and the space between the door
                    and the frame. If it's hot, don't open it. Heat is an
                    indicator of fire on the other side.</p>
    </div>
  </div>
  <div className="flex relative pb-12">
    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-gray pointer-events-none"></div>
    </div>
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red inline-flex items-center justify-center text-white relative z-0">
      <ArrowSmallDownIcon className='w-5 h-5' />
    </div>
    <div className="flex-grow pl-4">
    <h2 className="font-semibold  text-lg  mb-1 tracking-wider text-red">  Crawl Low.</h2> 
      <p className="leading-relaxed font-poppins text-base" > In areas filled with smoke, smoke rises, and cleaner
                    air is closer to the floor. Crawl low to avoid
                    inhaling smoke.</p>
    </div>
  </div>
  <div className="flex relative pb-12">
    {/* <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-gray pointer-events-none"></div>
    </div> */}
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red inline-flex items-center justify-center text-white relative z-0">
      <ExclamationCircleIcon className='w-5 h-5'/>
    </div>
    <div className="flex-grow pl-4">
    <h2 className="font-semibold  text-lg  mb-1 tracking-wider text-red"> Do Not Use Elevators.</h2> 
      <p className="leading-relaxed font-poppins text-base"> Elevators can become inoperable during a fire. Always
                    use the stairs.</p>
    </div>
  </div>
  {/* <div className="flex relative">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red inline-flex items-center justify-center text-white relative z-0">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>
    </div>
    <div className="flex-grow pl-4">
    <h2 className="font-semibold  text-lg  mb-1 tracking-wider text-red">  Don't Re-enter.</h2> 
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
          <h2 className="font-bold text-3xl lg:text-4xl text-red/80 ">
          What support is provided to fire-affected individuals
                        and families?
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

            <span className="text-sm sm:text-base  font-poppins ">
              <span className="font-bold">Emergency shelters</span> –    for temporary housing
            </span>
          </li>

          <li className="flex space-x-3">
            {/* <!-- Solid Check --> */}
            <div className='bg-gray/20 rounded-full flex-shrink-0 w-6 h-6 flex items-center justify-center'>
            <CheckIcon className='w-5 h-5 text-black '/>
            </div>
            {/* <!-- End Solid Check --> */}

            <span className="text-sm sm:text-base  font-poppins ">
            Financial assistance and aid programs
            </span>
          </li>

          <li className="flex space-x-3">
            {/* <!-- Solid Check --> */}
          <div className='bg-gray/20 rounded-full flex-shrink-0 w-6 h-6 flex items-center justify-center'>
            <CheckIcon className='w-5 h-5 text-black '/>
            </div>
            {/* <!-- End Solid Check --> */}

            <span className="text-sm sm:text-base  font-poppins ">
            Counseling services for  <span className="font-bold">emotional support</span>
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
  </>
  )
}

export default FireContents