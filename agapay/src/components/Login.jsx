import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginbg } from "../assets";
const Login = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const [isLoginModalVisible, setLoginModalVisible] = useState(true);
  const [isRegisterModalVisible, setRegisterModalVisible] = useState(false);

  const showLoginModal = () => {
    setLoginModalVisible(true);
    setRegisterModalVisible(false);
  };

  const showRegisterModal = () => {
    setLoginModalVisible(false);
    setRegisterModalVisible(true);
  };
  return (
    <>
      <div className={`LoginModal ${isLoginModalVisible ? "" : "hidden"}`}>
        <div
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-black bg-opacity-50 items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-0.5rem)] max-h-full rounded-lg"
        >
          <div className="flex sm:flex-row flex-col items-center w-full max-w-4xl  lg:max-h-[85%] md:max-h-[90%] sm:max-h-[85%]  h-full ">
            <div className="w-full h-full p-4   sm:rounded-l-lg   bg-white ">
              <div className="flex flex-col h-full align-center  justify-center">
                <h2 className="text-center text-4xl font-semibold text-primary opacity-80 font-inter leading-9 mb-5 tracking-tight mt-5  ">
                  Welcome to Agapay
                </h2>
                <p className=" mb-2 text-center font-poppins">
                  Your login is essential to access our services and contribute
                  to disaster reporting and travel assistance requests.
                </p>
                <div className="space-y-6 p-4 ">
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        id="floating_outlined1"
                        className="block px-2.5 font-poppins  pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none  focus:outline-primary focus:ring-0 border  peer"
                        placeholder=""
                      />
                      <label
                        htmlFor="floating_outlined1"
                        className="absolute text-sm  font-poppins cursor-text  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                      >
                        Username
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-2">
                      <input
                        type="password"
                        id="floating_outlined"
                        className="block px-2.5 font-poppins  pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-primary focus:ring-0 border  peer"
                        placeholder=""
                      />
                      <label
                        htmlFor="floating_outlined"
                        className="absolute text-sm  font-poppins cursor-text  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                      >
                        Password
                      </label>
                      <i
                        className="bi bi-eye-slash eye-icon absolute inset-y-0 right-0 flex items-center pr-3  cursor-pointer"
                        id="add_admin_confirm_password_toggle"
                      >
                        s
                      </i>
                    </div>
                    <div className="flex  flex-col items-end mt-5  mb-3">
                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-semibold text-primary hover:underline font-poppins"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>

                    <div className="mb-3 mt-7">
                      <button
                        type="submit"
                        className="flex transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300 w-full justify-center font-poppins  bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Sign in
                      </button>
                    </div>

                    <div className="mb-3 flex items-center">
                      <hr className="flex-grow border-t border-gray-300 mr-2" />
                      <span >or</span>
                      <hr className="flex-grow border-t border-gray-300 ml-2" />
                    </div>
                    <div className="mb-3">
                      <button
                        type="button"
                        className="flex w-full justify-center transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300 font-poppins bg-transparent hover:bg-black hover:text-white border text-black px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                        onClick={onClose}
                      >
                        Continue As Guest
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-full sm:rounded-r-lg bg-primary p-5 flex flex-col  align-center  justify-center bg-cover" style={{backgroundImage: `url(${loginbg})`}} >
              <h2 className="text-center text-2xl font-bold font-inter leading-9 mb-5 tracking-tight mt-5  ">
                Learn About Our Features
              </h2>
              <ul className="mb-6 text-left font-poppins font-medium">
                <li className="mb-2">
                  <span className="">&#8226;</span> Receive
                  real-time disaster alerts tailored to your location.
                </li>
                <li className="mb-2">
                  <span className="">&#8226;</span> Access accurate
                  and up-to-date information during emergencies.
                </li>
                <li>
                  <span className="">&#8226;</span> Collaborate
                  with local communities for effective disaster response.
                </li>
              </ul>
              <p className="mb-6 font-poppins font-medium">
                Agapay is your partner in building resilient communities. Join
                us in making a difference today.
                <Link
                  className="font-semibold text-secondary hover:underline font-poppins"
                  to="/about"
                  onClick={onClose}
                >
                  Learn More
                </Link>
              </p>
              <div className="flex items-center text-center">
                <button
                  type="button"
                  onClick={showRegisterModal}
                  className="text-white rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300 bg-secondary mb-3 w-full  hover:bg-primaryhover font-poppins hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-10 py-2.5 text-center  "
                >
                  Sign Up
                </button>
              </div>
            </div>
            <button
              type="button"
              className=" bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 absolute top-4 right-4 md:hidden"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`RegisterModal ${isRegisterModalVisible ? "" : "hidden"}`}
      >
        <div
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-black bg-opacity-50 items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-0.5rem)] max-h-full rounded-lg"
        >
          <div className="flex sm:flex-row flex-col-reverse items-center w-full max-w-4xl overflow-y-auto  lg:max-h-[85%] md:max-h-[90%] sm:max-h-[85%]  h-full ">
            <div className="w-full h-full sm:rounded-l-lg bg-gray p-5 flex flex-col items-center justify-center bg-cover" style={{backgroundImage: `url(${loginbg})`}}>
            <h2 className="text-center text-4xl font-bold text-black font-inter leading-9 mb-5 tracking-tight mt-5  ">
                  Existing User?
                </h2>
                <p className=" mb-2 text-center font-poppins font-medium">
                  Your login is essential to access our services and contribute
                  to disaster reporting and travel assistance requests.
                </p>
            <button
                  type="button"
                  onClick={showLoginModal}
                  className="flex w-full justify-center font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300    bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primaryhover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                >
                  Go back to Log In
                </button>
            </div>

            <div className="w-full h-full p-4   sm:rounded-r-lg   bg-white ">
              <div
                className="flex flex-col h-full justify-center"
                id="step-1"
                style={{ display: currentStep === 1 ? "flex" : "none" }}
              >
                <h2 className="text-center text-4xl font-semibold text-primary opacity-80 font-inter leading-9 mb-2 tracking-tight   ">
                  Personal Information
                </h2>
                <div className="space-y-6 p-4 ">
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined1"
                      className="block px-2.5 font-poppins  pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none  focus:outline-primary focus:ring-0 border  peer"
                      placeholder=""
                    />
                    <label
                      htmlFor="floating_outlined1"
                      className="absolute text-sm  font-poppins  cursor-text  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      First Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined2"
                      className="block px-2.5 font-poppins  pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none  focus:outline-primary focus:ring-0 border  peer"
                      placeholder=""
                    />
                    <label
                      htmlFor="floating_outlined2"
                      className="absolute text-sm  font-poppins cursor-text  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      Last Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined3"
                      className="block px-2.5 font-poppins  pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none  focus:outline-primary focus:ring-0 border  peer"
                      placeholder=""
                    />
                    <label
                      htmlFor="floating_outlined3"
                      className="absolute text-sm  font-poppins  cursor-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      Email
                    </label>
                  </div>
                  <div>
                    <label
                      class="block mb-2 text-sm font-medium font-poppins "
                      for="large_size"
                    >
                      Please Attach Your ID
                    </label>
                    <input
                      class="block w-full text-md  border border-black rounded-lg cursor-pointer  font-poppins"
                      id="large_size"
                      type="file"
                    />
                  </div>

                  <div>
                    <div className="mb-3 mt-5">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex w-full justify-center font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300   bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col h-full justify-center "
                id="step-2"
                style={{ display: currentStep === 2 ? "flex" : "none" }}
              >
                <h2 className="text-center text-4xl font-semibold text-primary opacity-80 font-inter leading-9 mb-2 tracking-tight   ">
                  Address Verification
                </h2>
                <div className="space-y-6 p-4 ">
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined4"
                      className="block px-2.5 font-poppins  pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none  focus:outline-primary focus:ring-0 border  peer"
                      placeholder=""
                    />
                    <label
                      htmlFor="floating_outlined4"
                      className="absolute text-sm  font-poppins  cursor-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      House Number and Street Name
                    </label>
                  </div>
                  <select
                    id="countries"
                    class="border font-poppins bg-white   text-sm rounded-lg outline-none  focus:ring-primary focus:border-primary block w-full p-2.5 "
                  >
                    <option selected>Choose a Barangay</option>
                    <option value="US">United States</option>
                  </select>
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined5"
                      className="block px-2.5 font-poppins pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-primary focus:ring-0 border disabled peer"
                      placeholder=""
                      disabled // Add the disabled attribute here
                    />
                    <label
                      htmlFor="floating_outlined5"
                      className="absolute text-sm  font-poppins cursor-not-allowed duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      Postal Code
                    </label>
                  </div>

                  <div>
                    <div className="mb-3 mt-5">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex w-full justify-center font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300   bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Next
                      </button>
                      <button
                        type="button"
                        onClick={previousStep}
                        className="flex w-full justify-center font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300   bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Previous
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col h-full justify-center "
                id="step-3"
                style={{ display: currentStep === 3 ? "flex" : "none" }}
              >
                <h2 className="text-center text-4xl font-semibold text-primary opacity-80 font-inter leading-9 mb-2 tracking-tight   ">
                  Contact Number Verification
                </h2>
                <div className="space-y-6 p-4 ">
                  <div class="relative flex items-center mt-3">
                    <div class="flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium  bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100   ">
                      +63
                    </div>
                    <div class="relative w-full">
                      <input
                        type="search"
                        id="search-dropdown"
                        class="block p-2.5 w-full z-20 text-sm bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500     peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="search-dropdown"
                        class="absolute text-sm  font-poppins cursor-text  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                      >
                        Contact Number
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined4"
                      className="block px-2.5 font-poppins  pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none  focus:outline-primary focus:ring-0 border  peer"
                      placeholder=""
                    />
                    <label
                      htmlFor="floating_outlined4"
                      className="absolute text-sm  font-poppins  cursor-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      Verification Code
                    </label>
                  </div>
                  <div className="flex justify-end gap-3 flex-col-2 sm:flex-row">
                    <button className="bg-primary hover:bg-primarydark font-poppins text-sm px-2 py-1.5 rounded-lg text-white ">
                      Send Verification Code
                    </button>
                    <button className="bg-secondary hover:bg-primaryhover font-poppins text-sm px-2 py-1.5 rounded-lg text-white ">
                      Verify
                    </button>
                  </div>

                  <div>
                    <div className="mb-3 mt-16">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex w-full justify-center font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300   bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Next
                      </button>
                      <button
                        type="button"
                        onClick={previousStep}
                        className="flex w-full justify-center font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300   bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Previous
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col h-full justify-center "
                id="step-4"
                style={{ display: currentStep === 4 ? "flex" : "none" }}
              >
                <h2 className="text-center text-4xl font-semibold text-primary opacity-80 font-inter leading-9 mb-2 tracking-tight   ">
                  Account Information
                </h2>
                <div className="space-y-6 p-4 ">
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined4"
                      className="block px-2.5 font-poppins  pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none  focus:outline-primary focus:ring-0 border  peer"
                      placeholder=""
                    />
                    <label
                      htmlFor="floating_outlined4"
                      className="absolute text-sm  font-poppins  cursor-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      Username
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined4"
                      className="block px-2.5 font-poppins  pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none  focus:outline-primary focus:ring-0 border  peer"
                      placeholder=""
                    />
                    <label
                      htmlFor="floating_outlined4"
                      className="absolute text-sm  font-poppins  cursor-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      Password
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined4"
                      className="block px-2.5 font-poppins  pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none  focus:outline-primary focus:ring-0 border  peer"
                      placeholder=""
                    />
                    <label
                      htmlFor="floating_outlined4"
                      className="absolute text-sm  font-poppins  cursor-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      Confirm Password
                    </label>
                  </div>

                  <div>
                    <div className="mb-3 mt-5">
                      <button
                        type="button"
                        onClick=""
                        className="flex w-full justify-center font-poppins   bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={previousStep}
                        className="flex w-full justify-center font-poppins   bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Previous
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className=" bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 absolute top-4 right-4 md:hidden"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
