import React from "react";
import { Link } from "react-router-dom";
const Login = ({ onClose }) => {
  return (
    <>
      <div className="modal">
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
                <p className="text-gray-700 mb-2 text-center font-poppins">
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
                        className="absolute text-sm text-gray-500 font-poppins  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                      >
                        Username
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-2">
                      <input
                        type="text"
                        id="floating_outlined"
                        className="block px-2.5 font-poppins  pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-primary focus:ring-0 border  peer"
                        placeholder=""
                      />
                      <label
                        htmlFor="floating_outlined"
                        className="absolute text-sm text-gray-500 font-poppins  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                      >
                        Password
                      </label>
                      <i
                        className="bi bi-eye-slash eye-icon absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer"
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
                        className="flex w-full justify-center font-poppins  bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Sign in
                      </button>
                    </div>
                    <div className="mb-3 flex items-center">
                      <hr className="flex-grow border-t border-gray-300 mr-2" />
                      <span className="text-gray-400">or</span>
                      <hr className="flex-grow border-t border-gray-300 ml-2" />
                    </div>
                    <div className="mb-3">
                      <button
                        type="button"
                        className="flex w-full justify-center font-poppins bg-transparent hover:bg-gray border text-black px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                        onClick={onClose}
                      >
                        Continue As Guest
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-full sm:rounded-r-lg bg-primary p-5 flex flex-col  align-center  justify-center">
              <h2 className="text-center text-2xl font-semibold font-inter leading-9 mb-5 tracking-tight mt-5  ">Why Choose Agapay?</h2>
              <ul className="mb-6 text-left font-poppins">
                <li className="mb-2">
                  <span className="text-blue-500">&#8226;</span> Receive real-time
                  disaster alerts tailored to your location.
                </li>
                <li className="mb-2">
                  <span className="text-blue-500">&#8226;</span> Access accurate and
                  up-to-date information during emergencies.
                </li>
                <li>
                  <span className="text-blue-500">&#8226;</span> Collaborate with
                  local communities for effective disaster response.
                </li>
              </ul>
              <p className="mb-6 font-poppins">
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
                  className="text-white rounded-full bg-secondary mb-3 w-full  hover:bg-primaryhover font-poppins hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-10 py-2.5 text-center  "
                >
                  Create an Account
                </button>
              </div>
            </div>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 absolute top-4 right-4 md:hidden"
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
