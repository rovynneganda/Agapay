import React, { useState } from "react";
import {
  PhoneIcon,
  QuestionMarkCircleIcon,
  MapPinIcon,
  XMarkIcon,
  FireIcon,
  BuildingOffice2Icon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

const Hotlines = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const openExternalWebsite = () => {
    window.open("https://maps.app.goo.gl/k61F5F3LWuW9d4Xe7", "_blank");
    setShowModal(false);
  };
  const [showModal1, setShowModal1] = useState(false);

  const handleShowModal1 = () => {
    setShowModal1(true);
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
  };

  const openExternalWebsite1 = () => {
    window.open("https://maps.app.goo.gl/HpmTzJCcbDCzp9Lm6", "_blank");
    setShowModal1(false);
  };
  const [showModal2, setShowModal2] = useState(false);

  const handleShowModal2 = () => {
    setShowModal2(true);
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
  };

  const openExternalWebsite2 = () => {
    window.open("https://maps.app.goo.gl/LbxGKFviLD5sd2Rv9", "_blank");
    setShowModal2(false);
  };
  const [showModal3, setShowModal3] = useState(false);

  const handleShowModal3 = () => {
    setShowModal3(true);
  };

  const handleCloseModal3 = () => {
    setShowModal3(false);
  };

  const openExternalWebsite3 = () => {
    window.open("https://maps.app.goo.gl/sqTPGDfhgupDrbY1A", "_blank");
    setShowModal3(false);
  };
  const [showModal4, setShowModal4] = useState(false);

  const handleShowModal4 = () => {
    setShowModal4(true);
  };

  const handleCloseModal4 = () => {
    setShowModal4(false);
  };

  const openExternalWebsite4 = () => {
    window.open("https://maps.app.goo.gl/wFRLJyPtY8aQekc78", "_blank");
    setShowModal4(false);
  };
  const [showModal5, setShowModal5] = useState(false);

  const handleShowModal5 = () => {
    setShowModal5(true);
  };

  const handleCloseModal5 = () => {
    setShowModal5(false);
  };

  const openExternalWebsite5 = () => {
    window.open("https://maps.app.goo.gl/ssfDo5tjYA5fHyoVA", "_blank");
    closeModal(); // Close the modal
  };
  return (
    <>
      <section className="">
        <div className="container px-5 py-9 mx-auto">
          <div className="flex flex-wrap w-full  flex-col items-center text-center">
            <h1 className="text-4xl font-semibold mb-3 font-poppins text-primary">
              General Hotlines
            </h1>
            <p className="lg:w-1/2 w-full text-black leading-relaxed font-poppins text-lg">
              Emergency Contacts and Support Helplines
            </p>
            <p className="lg:w-1/2 w-full text-gray leading-relaxed font-poppins text-lg">
              Press <MapPinIcon className="w-6 h-6 inline-block text-primary"/> to get the Google Map Location
            </p>
          </div>
          <div className="flex flex-wrap -m-4  rounded-xl p-0 sm:p-10">
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border  border-gray/10 bg-white  rounded-xl shadow-md p-6 ">
                <div className="flex flex-row">
                  <div className="text-primary bg-primary/20  mr-2  w-8 h-8    rounded-full  capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <FireIcon className="w-10 h-10" />
                  </div>
                  <h2 className="text-lg text-primary font-semibold  mb-2 font-inter cursor-default">
                    4th Avenue Fire Station
                  </h2>
                </div>

                <div className="flex flex-row">
                  <button className=" mr-2  cursor-default      capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <PhoneIcon className="h-5 w-5 text-primary font-semibold" />
                  </button>
                  <h3 className="text-md text-gray font-medium font-poppins mb-2 mt-2">
                    +63(2)83649060
                  </h3>
                </div>
                <div className="flex flex-row">
                  <button onClick={handleShowModal} className="text-primary  mr-2     capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <MapPinIcon className="h-5 w-5" />
                  </button>
                  <p
                    onClick={handleShowModal}
                    className="leading-relaxed text-[#c2410c]  font-poppins cursor-pointer underline decoration-[#fdba74] underline-offset-4"
                  >
                    A. Del Mundo Street corner 4th Avenue & 5th Avenue, Barangay
                    51
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border  border-gray/10 bg-white  rounded-xl shadow-md p-6">
                <div className="flex flex-row">
                  <div className="text-primary bg-primary/20  mr-2  w-8 h-8    rounded-full  capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <FireIcon className="w-10 h-10" />
                  </div>
                  <h2 className="text-lg text-primary font-semibold  mb-2 font-inter cursor-default">
                    Central Fire Station
                  </h2>
                </div>
                <div className="flex flex-row">
                  <button className=" mr-2  cursor-default      capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <PhoneIcon className="h-5 w-5 text-primary font-semibold" />
                  </button>
                  <h3 className="text-md text-gray font-medium font-poppins mb-2 mt-2">
                    324 6527
                  </h3>
                </div>

                <div className="flex flex-row">
                  <button  onClick={handleShowModal1} className="text-primary  mr-2    capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <MapPinIcon className="h-5 w-5" />
                  </button>
                  <p
                    onClick={handleShowModal1}
                    className="leading-relaxed text-[#c2410c]  font-poppins cursor-pointer underline decoration-[#fdba74] underline-offset-4"
                  >
                    Samson Road, Sangandaan Barangay 1 Caloocan, Metro Manila
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border  border-gray/10 bg-white  rounded-xl shadow-md p-6">
                <div className="flex flex-row">
                  <div className="text-primary bg-primary/20  mr-2  w-8 h-8    rounded-full  capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <ShieldExclamationIcon className="w-10 h-10" />
                  </div>
                  <h2 className="text-lg text-primary font-semibold  mb-2 font-inter cursor-default">
                    Northern Police - Station 1
                  </h2>
                </div>
                <div className="flex flex-row">
                  <button className=" mr-2  cursor-default      capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <PhoneIcon className="h-5 w-5 text-primary font-semibold" />
                  </button>
                  <h3 className="text-md text-gray font-medium font-poppins mb-2 mt-2">
                    +63(2)324 6528
                  </h3>
                </div>

                <div className="flex flex-row">
                  <button    onClick={handleShowModal2} className="text-primary  mr-2    capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <MapPinIcon className="h-5 w-5" />
                  </button>
                  <p
                    onClick={handleShowModal2}
                    className="leading-relaxed  text-[#c2410c] font-poppins cursor-pointer underline decoration-[#fdba74] underline-offset-4"
                  >
                    Samson Road, Sangandaan, Caloocan City 1408 Metro Manila
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border  border-gray/10 bg-white  rounded-xl shadow-md p-6">
                <div className="flex flex-row">
                  <div className="text-primary bg-primary/20  mr-2  w-8 h-8    rounded-full  capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <ShieldExclamationIcon className="w-10 h-10" />
                  </div>
                  <h2 className="text-lg text-primary font-semibold  mb-2 font-inter cursor-default">
                    Northern Police District
                  </h2>
                </div>
                <div className="flex flex-row">
                  <button className=" mr-2  cursor-default      capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <PhoneIcon className="h-5 w-5 text-primary font-semibold" />
                  </button>
                  <h3 className="text-md text-gray font-medium font-poppins mb-2 mt-2">
                    +63(2)9623918
                  </h3>
                </div>

                <div className="flex flex-row">
                  <button     onClick={handleShowModal3} className="text-primary  mr-2    capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <MapPinIcon className="h-5 w-5" />
                  </button>
                  <p
                    onClick={handleShowModal3}
                    className="leading-relaxed text-[#c2410c]  font-poppins cursor-pointer underline decoration-[#fdba74] underline-offset-4"
                  >
                    Cadena De Amor Street, Camarin 1. P.C. 1422 Caloocan City,
                    Metro Manila
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border  border-gray/10 bg-white  rounded-xl shadow-md p-6">
                <div className="flex flex-row">
                  <div className="text-primary bg-primary/20  mr-2  w-8 h-8    rounded-full  capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <BuildingOffice2Icon className="w-10 h-10" />
                  </div>
                  <h2 className="text-lg text-primary font-semibold  mb-2 font-inter cursor-default">
                    North Medical Center
                  </h2>
                </div>
                <div className="flex flex-row">
                  <button className=" mr-2  cursor-default      capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <PhoneIcon className="h-5 w-5 text-primary font-semibold" />
                  </button>
                  <h3 className="text-md text-gray font-medium font-poppins mb-2 mt-2">
                    02-8424-1724
                  </h3>
                </div>

                <div className="flex flex-row">
                  <button   onClick={handleShowModal4} className="text-primary  mr-2    capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <MapPinIcon className="h-5 w-5" />
                  </button>
                  <p
                    onClick={handleShowModal4}
                    className="leading-relaxed text-[#c2410c]  font-poppins cursor-pointer underline decoration-[#fdba74] underline-offset-4"
                  >
                    Camarin Road, Barangay 177 Caloocan City, Metro Manila
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border  border-gray/10 bg-white  rounded-xl shadow-md p-6">
                <div className="flex flex-row">
                  <div className="text-primary bg-primary/20  mr-2  w-8 h-8    rounded-full  capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <BuildingOffice2Icon className="w-10 h-10" />
                  </div>
                  <h2 className="text-lg text-primary font-semibold  mb-2 font-inter cursor-default">
                    South Medical Center
                  </h2>
                </div>
                <div className="flex flex-row">
                  <button className=" mr-2  cursor-default      capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <PhoneIcon className="h-5 w-5 text-primary font-semibold" />
                  </button>
                  <h3 className="text-md text-gray font-medium font-poppins mb-2 mt-2">
                    +63 (2) 310 7920
                  </h3>
                </div>

                <div className="flex flex-row">
                  <button  onClick={handleShowModal5} className="text-primary  mr-2    capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <MapPinIcon className="h-5 w-5" />
                  </button>
                  <p
                    onClick={handleShowModal5}
                    className="leading-relaxed text-[#c2410c] font-poppins cursor-pointer underline decoration-[#fdba74] underline-offset-4"
                  >
                    450, A. Mabini Street, Poblacion Caloocan City, Metro Manila
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <div
          tabindex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden   bg-gray bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute top-3 right-2.5 text-gray bg-transparent hover:bg-gray/20 hover:text-gray rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              >
                <XMarkIcon className="w-5 h-5" />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <QuestionMarkCircleIcon className="h-12 w-12 mb-5 mx-auto text-blue" />
                <h3 className="mb-5 text-lg font-normal text-gray font-inter ">
                  Would you like to proceed with opening this on Google Maps?
                </h3>
                <button
                  type="button"
                  onClick={openExternalWebsite}
                  className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Open Maps
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal1 && (
        <div
          tabindex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden   bg-gray bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <button
                type="button"
                onClick={handleCloseModal1}
                className="absolute top-3 right-2.5 text-gray bg-transparent hover:bg-gray/20 hover:text-gray rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              >
                <XMarkIcon className="w-5 h-5" />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <QuestionMarkCircleIcon className="h-12 w-12 mb-5 mx-auto text-blue" />
                <h3 className="mb-5 text-lg font-normal text-gray font-inter ">
                  Would you like to proceed with opening this on Google Maps?
                </h3>
                <button
                  type="button"
                  onClick={openExternalWebsite1}
                  className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Open Maps
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal1}
                  className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal2 && (
        <div
          tabindex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden   bg-gray bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <button
                type="button"
                onClick={handleCloseModal2}
                className="absolute top-3 right-2.5 text-gray bg-transparent hover:bg-gray/20 hover:text-gray rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              >
                <XMarkIcon className="w-5 h-5" />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <QuestionMarkCircleIcon className="h-12 w-12 mb-5 mx-auto text-blue" />
                <h3 className="mb-5 text-lg font-normal text-gray font-inter ">
                  Would you like to proceed with opening this on Google Maps?
                </h3>
                <button
                  type="button"
                  onClick={openExternalWebsite2}
                  className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Open Maps
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal2}
                  className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal3 && (
        <div
          tabindex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden   bg-gray bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <button
                type="button"
                onClick={handleCloseModal3}
                className="absolute top-3 right-2.5 text-gray bg-transparent hover:bg-gray/20 hover:text-gray rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              >
                <XMarkIcon className="w-5 h-5" />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <QuestionMarkCircleIcon className="h-12 w-12 mb-5 mx-auto text-blue" />
                <h3 className="mb-5 text-lg font-normal text-gray font-inter ">
                  Would you like to proceed with opening this on Google Maps?
                </h3>
                <button
                  type="button"
                  onClick={openExternalWebsite3}
                  className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Open Maps
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal3}
                  className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal4 && (
        <div
          tabindex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden   bg-gray bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <button
                type="button"
                onClick={handleCloseModal4}
                className="absolute top-3 right-2.5 text-gray bg-transparent hover:bg-gray/20 hover:text-gray rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              >
                <XMarkIcon className="w-5 h-5" />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <QuestionMarkCircleIcon className="h-12 w-12 mb-5 mx-auto text-blue" />
                <h3 className="mb-5 text-lg font-normal text-gray font-inter ">
                  Would you like to proceed with opening this on Google Maps?
                </h3>
                <button
                  type="button"
                  onClick={openExternalWebsite4}
                  className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Open Maps
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal4}
                  className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal5 && (
        <div
          tabindex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden   bg-gray bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <button
                type="button"
                onClick={handleCloseModal5}
                className="absolute top-3 right-2.5 text-gray bg-transparent hover:bg-gray/20 hover:text-gray rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              >
                <XMarkIcon className="w-5 h-5" />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <QuestionMarkCircleIcon className="h-12 w-12 mb-5 mx-auto text-blue" />
                <h3 className="mb-5 text-lg font-normal text-gray font-inter ">
                  Would you like to proceed with opening this on Google Maps?
                </h3>
                <button
                  type="button"
                  onClick={openExternalWebsite5}
                  className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Open Maps
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal5}
                  className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hotlines;
