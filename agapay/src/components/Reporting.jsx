import React, { useState } from "react";
import { logo } from "../assets";
import { MapPinIcon } from "@heroicons/react/24/outline";
const Reporting = () => {
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);
  const [isTravelModalVisible, setisTravelModalVisible] = useState(false)
  const handleSelectButtonClickAssistance = () => {
    setisTravelModalVisible(true);
  };
  const handleSelectButtonClickReport = () => {
    setIsReportModalVisible(true);
  };

  return (
    <>
    <div className="bg-accent">
    <section className="p-5 rounded-xl mx-auto sm:w-full md:w-[80%] lg:w-[90%] xl:w-[90%] ">
    <div className="p-5">
          <p className="text-2xl font-semibold mb-3 font-poppins text-primary">
            How Can We Assist You Today?
          </p>
          <p className="font-poppins text-gray">
            Feel free to select the option that suits your current needs.
          </p>
        </div>
      <div className=" rounded-xl p-5">
        <div className="flex sm:flex-row flex-col gap-10 justify-center items-center">
          <div className="max-w-sm bg-white border border-gray/20 rounded-lg shadow-lg transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300  ">
            <img
              className="rounded-t-lg  h-40 mx-auto mt-2"
              src={logo}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 font-inter">
                Raise an Alarm
              </h5>
              <p className="mb-3 font-normal text-gray-700 font-poppins">
                Instantly alert authorities and be a beacon of security,
                ensuring swift action.
                <span className="text-primary">Raising an alarm</span>{" "}
                guarantees prompt response from local authorities, ensuring
                effective solutions.
              </p>
              <button
              onClick={handleSelectButtonClickReport}
                className="inline-flex items-center w-full justify-center rounded-full  px-3 py-2 text-md font-poppins font-medium text-center text-white bg-primary  hover:bg-primarydark focus:ring-4 focus:outline-none focus:ring-white  "
              >
              Select
              </button>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray/20 rounded-lg shadow-lg  transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
            <img className="rounded-t-lg h-40 mx-auto mt-2" src={logo} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 font-inter">
                Request a Travel Assistance{" "}
              </h5>
              <p className="mb-3 font-normal text-gray-700 font-poppins">
                In emergencies, swift action is essential. With{" "}
                <span className="text-primary">
                  Request a Travel Assistance,
                </span>{" "}
                we ensure timely and safe hospital transport. Your well-being is
                our priority—reliable aid when you need it most.
              </p>
              <button
              onClick={handleSelectButtonClickAssistance}
                className="inline-flex items-center w-full justify-center rounded-full  px-3 py-2 text-md font-poppins font-medium text-center text-white bg-primary  hover:bg-primarydark focus:ring-4 focus:outline-none focus:ring-white  "
              >
               Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    {isReportModalVisible && (
    <div  tabIndex="-1" aria-hidden="true" className="fixed left-0 right-0 top-0 z-50 flex h-[calc(100%)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray bg-opacity-80 p-4 md:inset-0">
  <div className="relative max-h-full w-full max-w-2xl">
    {/* <!-- Modal content --> */}
    <div className="relative rounded-lg bg-white shadow ">
      {/* <!-- Modal header --> */}
      <div className="flex items-start justify-between rounded-t border-b border-gray/30 bg-primary  p-4  ">
        <h3 className="text-xl font-semibold text-white font-inter ">Raise an Alarm</h3>
        <button type="button" className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-black hover:bg-gray hover:text-white  " onClick={() => setIsReportModalVisible(false)}> 
          <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      {/* <!-- Modal body --> */}
      <div className="space-y-2 p-6">
       <div className="flex flex-col">
          <div className="flex sm:justify-between sm:flex-row flex-col justify-center  ">
            <div>
              <p className="font-inter">Name: Joko Gadingan</p>
              <p className="font-inter">Contact Number: 0920-303-3229</p>
              <p className="font-inter">Address:</p>
            </div>
            <div className="flex items-center justify-center mt-3 mb-3">
              <button className="bg-primary px-2  py-2 font-poppins text-white text-semibold text-sm rounded-full hover:bg-primarydark">
              <MapPinIcon className='w-6 h-6 inline-block mr-1' />

                Use Current Location
                </button>
            </div>
          </div>
        </div>
                  <p className="flex justify-start font-semibold font-inter">Concern Type</p>
        <div className="grid place-items-center">
 <div className="grid w-full max-w-lg xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 rounded-xl p-2">
            <div>
              <input type="radio" name="option" id="2" value="2" className="peer hidden" />
              <label htmlFor="2" className="block cursor-pointer select-none rounded-xl font-inter border bg-subtlegray p-2 text-center text-black peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white border-gray/20">Flood</label>
            </div>

            <div>
              <input type="radio" name="option" id="3" value="3" className="peer hidden" />
              <label htmlFor="3" className="block cursor-pointer select-none rounded-xl border font-inter bg-subtlegray p-2 text-center text-black peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white border-gray/20">Fire</label>
            </div>

            <div>
              <input type="radio" name="option" id="4" value="3" className="peer hidden" />
              <label htmlFor="4" className="block cursor-pointer select-none rounded-xl border font-inter bg-subtlegray p-2 text-center text-black peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white border-gray/20">Earth Quake</label>
            </div>
            <div>
              <input type="radio" name="option" id="5" value="3" className="peer hidden" />
              <label htmlFor="5" className="block cursor-pointer select-none rounded-xl border font-inter bg-subtlegray p-2 text-center text-black peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white border-gray/20">Road Accident</label>
            </div>
          </div>
        </div>
                <div className="max-w-xs">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium font-inter">Specify if not included in the Option</label>
            <input type="text" id="first_name" className=" border border-gray/20 text-sm rounded-lg focus:ring-primary  block w-full p-2.5   " placeholder="Please put the concern here" required/>
        </div>
       <div className="sm:block hidden">
         <label className="block mb-2 text-sm font-medium font-inter" htmlFor="default_size">Upload a file</label>
<input className="block w-full mb-5 text-sm border border-gray/20   cursor-pointer  focus:outline-none " id="default_size" type="file"/>
         </div> 
         <div className="sm:hidden block">
           <p className='font-inter font-semibold'>Send a Video </p>
           <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-14 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                     <button className='w-auto'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-12">
  <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
</svg>
</button>
                      </div>
                    </div>
         </div>
         <div className='font-inter'>
<label htmlFor="message" className="block mb-2 text-sm font-medium ">Please provide Additional Information</label>
<textarea id="message" rows="4" className="block p-2.5 w-full text-sm  rounded-lg border border-gray/20 focus:ring-primary focus:border-primary   " placeholder="Give us an Insight on what Happened"></textarea>
</div>
      </div>
      {/* <!-- Modal footer --> */}
      <div className="flex items-center justify-center  sm:justify-start p-6 space-x-2 border-t border-gray/30 bg-subtlegray rounded-b font-inter">
                <button  type="button" className="text-white bg-primary  hover:bg-primarydark focus:ring-4 ring-subtlegray focus:outline-none    font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Submit</button>
                <button  type="button" className="text-gray-500 bg-white hover:bg-subtlegray focus:ring-4 ring-subtlegray focus:outline-none  rounded-lg border border-gray/25 text-sm font-medium px-5 py-2.5 hover:focus:z-10   "onClick={() => setIsReportModalVisible(false)}>Back</button>
            </div>
    </div>
  </div>
</div>
   )}
  {isTravelModalVisible && (
       <div  tabIndex="-1" aria-hidden="true" className="fixed left-0 right-0 top-0 z-50 flex h-[calc(100%)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray bg-opacity-80 p-4 md:inset-0">
  <div className="relative max-h-full w-full max-w-2xl">
    {/* <!-- Modal content --> */}
    <div className="relative rounded-lg bg-white shadow ">
      {/* <!-- Modal header --> */}
      <div className="flex items-start justify-between rounded-t border-b border-gray/30 bg-primary  p-4  ">
        <h3 className="text-xl font-semibold text-white font-inter ">Travel Assistance</h3>
        <button type="button" className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-black hover:bg-gray hover:text-white  " onClick={() => setisTravelModalVisible(false)}> 
          <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      {/* <!-- Modal body --> */}
      <div className="space-y-2 p-6">
       <div className="flex flex-col">
          <div className="flex sm:justify-between sm:flex-row flex-col justify-center  ">
            <div>
              <p className="font-inter">Name: Joko Gadingan</p>
              <p className="font-inter">Contact Number: 0920-303-3229</p>
              <p className="font-inter">Address:</p>
            </div>
            <div className="flex items-center justify-center mt-3 mb-3">
              <button className="bg-primary px-2  py-2 font-poppins text-white text-semibold text-sm rounded-full hover:bg-primarydark">
              <MapPinIcon className='w-6 h-6 inline-block mr-1' />
                Use Current Location
                </button>
            </div>
          </div>
        </div>
         <div className='font-inter'>
<label htmlFor="message" className="block mb-2 text-sm font-medium ">Please provide Additional Information</label>
<textarea id="message" rows="4" className="block p-2.5 w-full text-sm  rounded-lg border border-gray/20 focus:ring-primary focus:border-primary   " placeholder="Give us an Insight on what Happened"></textarea>
</div>
      </div>
      {/* <!-- Modal footer --> */}
      <div className="flex items-center justify-center  sm:justify-start p-6 space-x-2 border-t border-gray/30 bg-subtlegray rounded-b font-inter">
                <button  type="button" className="text-white bg-primary  hover:bg-primarydark focus:ring-4 ring-subtlegray focus:outline-none    font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Submit</button>
                <button  type="button" className="text-gray-500 bg-white hover:bg-subtlegray focus:ring-4 ring-subtlegray focus:outline-none  rounded-lg border border-gray/25 text-sm font-medium px-5 py-2.5 hover:focus:z-10   "onClick={() => setisTravelModalVisible(false)}>Back</button>
            </div>
    </div>
  </div>
</div>
  )}
    </>
  );
};

export default Reporting;
