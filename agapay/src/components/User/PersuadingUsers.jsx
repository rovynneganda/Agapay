import React from "react";
import { logo } from "../../assets";
const PersuadingUsers = () => {
  return (
    <>
      <section className="bg-accent">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-semibold font-inter text-primary ">
              Why should I login?
            </h2>
            <p className="mb-5 font-light text-gray sm:text-xl font-poppins">
              Seamless Access to Reporting and Assistance
            </p>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 sm:gap-6 lg:gap-8 xl:gap-10">
            <div className="flex flex-col p-12 text-center text-gray-900 bg-white rounded-xl">
              <img src={logo} alt="Icon" className="w-48 h-48 mx-auto mb-6" />
              <h3 className="mb-4 text-2xl font-semibold font-inter">Joko</h3>
              <p className="text-md font-poppins text-gray/90">
                I love you pwede ba ako na lang kahit wala ka nang kailangan?
              </p>
            </div>

            <div className="flex flex-col p-12 text-center text-gray-900 bg-white rounded-xl">
              <img src={logo} alt="Icon" className="w-48 h-48 mx-auto mb-6" />
              <h3 className="mb-4 text-2xl font-semibold font-inter">Joko</h3>
              <p className="text-md font-poppins text-gray/90">
                I love you pwede ba ako na lang kahit wala ka nang kailangan?
              </p>
            </div>

            <div className="flex flex-col p-12 text-center text-gray-900 bg-white rounded-xl">
              <img src={logo} alt="Icon" className="w-48 h-48 mx-auto mb-6" />
              <h3 className="mb-4 text-2xl font-semibold font-inter">Joko </h3>
              <p className="text-md font-poppins text-gray/90">
                I love you pwede ba ako na lang kahit wala ka nang kailangan?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersuadingUsers;
