import React from 'react'
import { logo, persuade1, persuade2,persuade3 } from "../../assets";
import { BellAlertIcon,PresentationChartLineIcon,ExclamationCircleIcon, CheckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
const StormSurgeContents = () => {
  return (
    <section className='bg-subtlegray'>
    <div className=' py-10 p-5'> 
    <div className="max-w-[85rem] mx-auto w-full   ">
    <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
      <div className="lg:col-span-3">
        <h1 className="block text-3xl font-bold  sm:text-4xl md:text-5xl lg:text-6xl text-primaryhover  font-inter  ">Storm Surge</h1>
        <p className="mt-3 text-lg font-poppins ">  A storm surge is a rapid and significant rise in sea level
                      generated by a powerful storm, typically a tropical
                      cyclone or hurricane, as it moves over an ocean or a large
                      body of water. 
               </p>
               <p className='mt-3 text-lg font-poppins'>Storm surges can cause severe coastal
                      flooding and are one of the most dangerous aspects of a
                      tropical storm, often resulting in extensive damage to
                      coastal areas.</p>
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
      <h2 className="mb-4 text-4xl tracking-tight font-semibold font-inter text-primaryhover  ">
      What are the primary dangers associated with storm
                        surges for coastal communities?
      </h2>
      {/* <p className="mb-5 font-light text-black sm:text-xl font-poppins">
      Simplifying Reporting and Assistance Access.
      </p> */}
    </div>
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 sm:gap-6 lg:gap-8 xl:gap-10">
    <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 " >
        <img src={persuade2} alt="Icon" className=" w-56 mx-auto " />
       <div>
       <h3 className="mb-4 text-2xl font-semibold font-inter"> Inundation</h3>
        <p className="text-md font-poppins text-gray/90">
        Storm surges can inundate coastal areas, flooding
                          homes, businesses, and infrastructure. Rapid and deep
                          flooding can trap people inside buildings and
                          vehicles, making evacuation and rescue difficult.
        </p>
       </div>
      </div>

      <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 " >
        <img src={persuade3} alt="Icon" className="w-56  mx-auto  " />
       <div>
        <h3 className="mb-4 text-2xl font-semibold font-inter">Strong Currents</h3>
        <p className="text-md font-poppins text-gray/90">
        Storm surges create strong and fast-moving currents.
                          These currents pose a significant risk to anyone
                          caught in the water, making swimming or even standing
                          hazardous.
        </p>
        </div>
      </div>

      <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 " >
        <img src={persuade1} alt="Icon" className="w-56   mx-auto  " />
       <div>
        <h3 className="mb-4 text-2xl font-semibold font-inter"> Loss of Life</h3>
        <p className="text-md font-poppins text-gray/90">
        Storm surges can lead to loss of life, particularly if
                          residents do not evacuate in time or if evacuation
                          routes are impassable. The combination of flooding,
                          strong currents, and debris increases the risk of
                          fatalities.
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
<h1 className=" sm:text-4xl text-3xl mb-4 font-semibold font-inter text-primaryhover">   How can residents determine if they are in a storm surge
                        evacuation zone?</h1>
<p className="mb-8 leading-relaxed font-poppins text-lg"> Local emergency management agencies often have
                          hotlines that residents can call to inquire about
                          evacuation zones and procedures. These hotlines are
                          staffed with knowledgeable personnel who can provide
                          detailed information.</p>
</div>
</div>
</section>
<section className="font-inter ">
<div className="container px-5 py-24 mx-auto  flex flex-wrap">
<h2 className="mb-4 text-4xl tracking-tight font-semibold font-inter text-primaryhover  mx-auto text-center">
What are the early warning signs of an impending storm
                        surge, and how should people respond to these signs?
      </h2>
<div className="flex lg:flex-row  md:flex-col sm:flex-col flex-col lg:gap-10 gap-0 w-full justify-center items-center">
<div className="lg:w-1/2 md:w-full ">
  <div className="flex relative pb-12">
    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-gray pointer-events-none"></div>
    </div>
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primaryhover  inline-flex items-center justify-center text-white relative z-0">
     <BellAlertIcon className='h-5 w-5'/>
  
    </div>
    <div className="flex-grow pl-4">
 <h2 className="font-semibold  text-lg  mb-1 tracking-wider text-primaryhover"> Meteorological Alerts.</h2> 
      <p className="leading-relaxed font-poppins">Monitoring weather forecasts and alerts from
                          meteorological agencies can provide advance notice of
                          an approaching storm surge. Pay attention to storm
                          warnings, especially if they indicate a risk of
                          coastal flooding.</p>
    </div>
  </div>
  <div className="flex relative pb-12">
    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-gray pointer-events-none"></div>
    </div>
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primaryhover  inline-flex items-center justify-center text-white relative z-0">
     <PresentationChartLineIcon className='h-5 w-5'/>
    </div>
    <div className="flex-grow pl-4">
    <h2 className="font-semibold  text-lg  mb-1 tracking-wider text-primaryhover ">    Tidal Patterns.</h2> 
      <p className="leading-relaxed font-poppins">  Unusual changes in tidal patterns, such as rapidly
                          rising water levels, can indicate a potential storm
                          surge. This might include high tides occurring at
                          unexpected times.</p>
    </div>
  </div>
  <div className="flex relative pb-12">
    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-gray pointer-events-none"></div>
    </div>
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primaryhover  inline-flex items-center justify-center text-white relative z-0">
      <ShieldCheckIcon className='w-5 h-5' />
    </div>
    <div className="flex-grow pl-4">
    <h2 className="font-semibold  text-lg  mb-1 tracking-wider text-primaryhover ">    Evacuate if Advised.</h2> 
      <p className="leading-relaxed font-poppins">      If evacuation orders are issued, residents should
                          follow designated evacuation routes and move to higher
                          ground. Evacuation plans should be familiarized in
                          advance.</p>
    </div>
  </div>
  <div className="flex relative pb-12">
    {/* <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-gray pointer-events-none"></div>
    </div> */}
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primaryhover  inline-flex items-center justify-center text-white relative z-0">
      <ExclamationCircleIcon className='w-5 h-5'/>
    </div>
    <div className="flex-grow pl-4">
    <h2 className="font-semibold  text-lg  mb-1 tracking-wider text-primaryhover ">        Stay Away from the Shoreline.</h2> 
      <p className="leading-relaxed font-poppins">   Avoid coastal areas, beaches, and docks. Stay away
                          from the shoreline to prevent being swept away by
                          strong currents.</p>
    </div>
  </div>
  {/* <div className="flex relative">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue  inline-flex items-center justify-center text-white relative z-0">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>
    </div>
    <div className="flex-grow pl-4">
    <h2 className="font-semibold  text-lg  mb-1 tracking-wider text-landslide  ">  Don't Re-enter.</h2> 
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
          <h2 className="font-bold text-3xl lg:text-4xl text-primaryhover ">
          What precautions should boaters and mariners take when a
                        storm surge is anticipated in coastal waters?
          </h2>
          {/* <p className="font-poppins">
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

            <span className="text-sm sm:text-base font-poppins">
              <span className="font-bold">   Ensure  </span> –  your vessel is equipped with all necessary
                          safety equipment, including life jackets, life rafts,
                          flares, emergency signaling devices, fire
                          extinguishers, and a first aid kit.
            </span>
          </li>

          <li className="flex space-x-3">
            {/* <!-- Solid Check --> */}
            <div className='bg-gray/20 rounded-full flex-shrink-0 w-6 h-6 flex items-center justify-center'>
            <CheckIcon className='w-5 h-5 text-black '/>
            </div>
            {/* <!-- End Solid Check --> */}

            <span className="text-sm sm:text-base font-poppins">
            Avoid going out to sea or entering coastal waters
                          during a storm surge or a tropical cyclone warning. It
                          is safest to stay on land until the threat has passed
                          entirely.
            </span>
          </li>

          <li className="flex space-x-3">
            {/* <!-- Solid Check --> */}
          <div className='bg-gray/20 rounded-full flex-shrink-0 w-6 h-6 flex items-center justify-center'>
            <CheckIcon className='w-5 h-5 text-black '/>
            </div>
            {/* <!-- End Solid Check --> */}

            <span className="text-sm sm:text-base font-poppins">
            Follow the instructions of the U.S. Coast Guard and
                          local marine authorities. They provide essential
                          information and advisories regarding safe boating
                          practices and restrictions 
                       
                           <span className="font-bold"> during severe weather
                          events.</span>
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

export default StormSurgeContents