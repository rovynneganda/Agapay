import React from "react";
import { emergencyResources } from "../constants";
import Footer from "./Footer";
const EmergencyResources = () => {
  return (
    <>
      <div className="bg-white py-16 mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-secondary font-poppins">
              Explore Emergency Resources Instantly
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl  font-inter">
              Essential Emergency Information
            </p>
            <p className="mt-6 text-lg leading-8 font-poppins ">
              In times of crisis, access to critical resources can make all the
              difference. With our Essential Emergency Information feature, you
              can swiftly locate nearby hospitals, police stations, and fire
              stations at the touch of a button. Powered by Google Maps API,
              this tool ensures you have immediate access to vital services when
              you need them the most.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {emergencyResources.map((resources) => (
                <div key={resources.name} className="relative pl-16">
                  <dt className=" text-base font-semibold leading-7 font-inter text-primary">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300">
                      <div
                        dangerouslySetInnerHTML={{ __html: resources.icon }}
                        className="h-6 w-6 text-white  "
                      />
                    </div>
                    {resources.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 font-poppins">
                    {resources.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="text-center p-5">
        <h2 className="text-3xl font-semibold mb-2 text-primary font-inter">
          Explore Nearby Services
        </h2>
        <h3 className="text-xl font-semibold mb-4  font-poppins">
          Find Hospitals, Police Stations, and Fire Stations
        </h3>
      </div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl grid sm:grid-cols-2 gap-6 p-5 mb-10">
        <div className="flex flex-col justify-center items-center sm:items-start gap-3">
          <div className="relative mb-4">
            <button className="px-4 py-2 bg-primary font-poppins text-white font-semibold hover:bg-primarydark rounded-lg">
              Nearby Hospitals
            </button>
          </div>
          <div className="relative mb-4">
            <button className="px-4 py-2 bg-primary font-poppins text-white font-semibold hover:bg-primarydark rounded-lg">
              Nearby Police Stations
            </button>
          </div>
          <div className="relative mb-4">
            <button className="px-4 py-2 bg-primary font-poppins text-white font-semibold hover:bg-primarydark rounded-lg">
              Nearby Fire Stations
            </button>
          </div>
          <div className="font-poppins">
            Discover nearby hospitals, police stations, and fire stations to
            ensure you know where to find help when you need it.
          </div>
        </div>
        <div>
          <a
            href="#"
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow "
          >
            <h5 className="mb-2 text-2xl font-bold text-gray-900 font-inter">
              Emergency Services Locator Joko I love u
            </h5>
            <p className="font-normal font-poppins">
              Use our service to quickly locate nearby hospitals, police
              stations, and fire stations. Your safety is our priority.
            </p>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EmergencyResources;
