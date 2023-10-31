import React from "react";

import Application from "../../weather/components/Application";

const Weather = () => {
  return (
    <>
      <section className="py-10 bg-subtlegray">
        <div className="">
      <h1 className="text-4xl mb-4 text-primary text-center font-inter font-semibold">
              Weather Updates
            </h1>
            <p className="mb-8 leading-relaxed text-center font-normal font-inter text-lg">
            Stay prepared with clear daily forecasts.
            </p>
            </div>
            <div className="flex flex-row gap-52 justify-center items-center"> 
            <div>
              dito yung caloocan ph eme
            </div>
            <div>
              dito yung hourly at daily forecast
            </div>
            </div>
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 bg-primary">
            <Application />
          </div>
        </div>
      </section>
    </>
  );
};

export default Weather;
