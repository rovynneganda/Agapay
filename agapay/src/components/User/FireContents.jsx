import React from 'react'
import { logo, persuade1, persuade2,persuade3 } from "../../assets";
import { BellAlertIcon, ArrowLeftOnRectangleIcon,ArrowSmallDownIcon,ExclamationCircleIcon } from '@heroicons/react/24/outline';
const FireContents = () => {
  return (
    <>
    <div className=' py-10 p-5'> 
    <div class="max-w-[85rem] mx-auto w-full   ">
    <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
      <div class="lg:col-span-3">
        <h1 class="block text-3xl font-bold  sm:text-4xl md:text-5xl lg:text-6xl text-red font-inter  ">Fire</h1>
        <p class="mt-3 text-lg font-inter ">Fire is a natural phenomenon that occurs when a
                combustible material reacts with an oxidizing agent,
                usually oxygen, in the presence of heat. It releases
                energy in the form of light and heat. Fires can occur in
                various environments and are essential for human survival
                as they provide warmth, light, and a means for cooking.
               </p>
      </div>
      <div class="lg:col-span-4 mt-10 lg:mt-0 mx-auto">
        <img class="w-full max-w-lg  rounded-xl" src="https://dummyimage.com/720x600" alt="Image Description"/>
      </div>
    </div>
  </div>
  </div>
  <section className="bg-red/10">
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
<section class="font-inter ">
<div class="container mx-auto flex  pt-10 items-center justify-center flex-col">
<img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
<div class="text-center lg:w-2/3 w-full">
<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium font-inter text-red">Why store and dispose of flammable materials properly?</h1>
<p class="mb-8 leading-relaxed font-inter text-lg">Flammable materials can easily catch fire and
                    contribute to the rapid spread of flames. Proper
                    storage ensures that these materials are kept in
                    designated areas away from potential ignition sources,
                    reducing the risk of fires.</p>
</div>
</div>
</section>
<section class="font-inter">
<div class="container px-5 py-24 mx-auto  flex flex-wrap">
<h2 className="mb-4 text-4xl tracking-tight font-semibold font-inter text-red/80 mx-auto text-center">
How should people exit buildings during a fire?
      </h2>
<div class="flex lg:flex-row  md:flex-col sm:flex-col flex-col lg:gap-10 gap-0 w-full justify-center items-center">
<div class="lg:w-1/2 md:w-full ">
  <div class="flex relative pb-12">
    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div class="h-full w-1 bg-gray pointer-events-none"></div>
    </div>
    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-red inline-flex items-center justify-center text-white relative z-0">
     <BellAlertIcon className='h-5 w-5'/>
  
    </div>
    <div class="flex-grow pl-4">
 <h2 class="font-medium title-font text-lg  mb-1 tracking-wider text-red">  Alert Others.</h2> 
      <p class="leading-relaxed"> If you discover a fire, immediately alert others by
                    shouting "Fire!" or activating the building's fire
                    alarm system, if available.</p>
    </div>
  </div>
  <div class="flex relative pb-12">
    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div class="h-full w-1 bg-gray pointer-events-none"></div>
    </div>
    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-red inline-flex items-center justify-center text-white relative z-0">
     <ArrowLeftOnRectangleIcon className='h-5 w-5'/>
    </div>
    <div class="flex-grow pl-4">
    <h2 class="font-medium title-font text-lg  mb-1 tracking-wider text-red"> Check Doors.</h2> 
      <p class="leading-relaxed">Before opening a door, use the back of your hand to
                    touch it, its doorknob, and the space between the door
                    and the frame. If it's hot, don't open it. Heat is an
                    indicator of fire on the other side.</p>
    </div>
  </div>
  <div class="flex relative pb-12">
    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div class="h-full w-1 bg-gray pointer-events-none"></div>
    </div>
    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-red inline-flex items-center justify-center text-white relative z-0">
      <ArrowSmallDownIcon className='w-5 h-5' />
    </div>
    <div class="flex-grow pl-4">
    <h2 class="font-medium title-font text-lg  mb-1 tracking-wider text-red">  Crawl Low.</h2> 
      <p class="leading-relaxed"> In areas filled with smoke, smoke rises, and cleaner
                    air is closer to the floor. Crawl low to avoid
                    inhaling smoke.</p>
    </div>
  </div>
  <div class="flex relative pb-12">
    {/* <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div class="h-full w-1 bg-gray pointer-events-none"></div>
    </div> */}
    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-red inline-flex items-center justify-center text-white relative z-0">
      <ExclamationCircleIcon className='w-5 h-5'/>
    </div>
    <div class="flex-grow pl-4">
    <h2 class="font-medium title-font text-lg  mb-1 tracking-wider text-red"> Do Not Use Elevators.</h2> 
      <p class="leading-relaxed"> Elevators can become inoperable during a fire. Always
                    use the stairs.</p>
    </div>
  </div>
  {/* <div class="flex relative">
    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-red inline-flex items-center justify-center text-white relative z-0">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>
    </div>
    <div class="flex-grow pl-4">
    <h2 class="font-medium title-font text-lg  mb-1 tracking-wider text-red">  Don't Re-enter.</h2> 
      <p class="leading-relaxed"> Once you have safely exited, do not re-enter the
                    building for any reason. Wait for emergency responders
                    to arrive.</p>
    </div>
  </div> */}
</div>
<div class="">
        <img class="w-full max-w-lg  rounded-xl" src="https://dummyimage.com/720x600" alt="Image Description"/>
      </div>
</div>

</div>
</section>
  </>
  )
}

export default FireContents