import React from "react";
import { logo, persuade1, persuade2,persuade3 } from "../../assets";
const PersuadingUsers = () => {
  return (
    <>
      <section className="bg-[#fff0d3]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-semibold font-inter text-primary ">
            Why Use the App?
            </h2>
            <p className="mb-5 font-light text-black sm:text-xl font-poppins">
            Simplifying Reporting and Assistance Access.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 sm:gap-6 lg:gap-8 xl:gap-10">
          <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 " >
              <img src={persuade2} alt="Icon" className=" w-56 mx-auto " />
             <div>
             <h3 className="mb-4 text-2xl font-semibold font-inter">Helping Others</h3>
              <p className="text-md font-poppins text-gray/90">
              Promotes safety via emergency reporting and aid.
              </p>
             </div>
            </div>

            <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 " >
              <img src={persuade3} alt="Icon" className="w-56  mx-auto  " />
             <div>
              <h3 className="mb-4 text-2xl font-semibold font-inter">Safety Updates</h3>
              <p className="text-md font-poppins text-gray/90">
               Provides real-time weather and disaster alerts for your safety.
              </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 " >
              <img src={persuade1} alt="Icon" className="w-56   mx-auto  " />
             <div>
              <h3 className="mb-4 text-2xl font-semibold font-inter">Immediate Assistance</h3>
              <p className="text-md font-poppins text-gray/90">
              Agapay facilitates swift emergency alerts to authorities or contacts.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersuadingUsers;
