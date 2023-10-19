import React from 'react'


import Application from '../weather/components/Application';

const Weather = () => {
  return (
    <>
    
<section class="text-gray-600 ">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 bg-primary">
      <Application />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Weather Updates
      </h1>
      <p class="mb-8 leading-relaxed">Easy-to-Understand Forecaststo Help You Prepare for the Day Ahead, Keeping You Informed and Ready for Whatever the Weather Brings!</p>
    </div>
  </div>
</section>

    </>
  )
}

export default Weather