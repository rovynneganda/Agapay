import React from "react";
import ForecastComp from "../../weather/components/ForecastComp";
import Application from "../../weather/components/Application";

const Weather = () => {
  return (
    <>
      <section className="py-10 bg-white ">
        <div className="">
      <h1 className="text-4xl mb-2 text-darkblue text-center font-inter font-semibold">
              Weather Updates
            </h1>
            <p className="mb-8 leading-relaxed text-center font-normal font-inter text-darkblue text-lg">
            Stay prepared with clear daily forecasts.
            </p>
            </div>
            <div className="flex sm:flex-col md:flex-row flex-col p-5 md:gap-2 sm:gap-0   gap-0 justify-center items-center"> 
           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full md:mb-0 ">
           <Application />
           <ForecastComp />
            </div>
           {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
   
            </div> */}
            </div>
      </section>
    </>
  );
};

export default Weather;
