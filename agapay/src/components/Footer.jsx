import React from "react";
import { logo } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img src={logo} className="mr-3 h-28 sm:h-36  " alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </div>
            <p className="font-semibold font-poppins text-primary opacity-80">
              We are dedicated to fortifying communities, <br /> offering timely
              aid, and fostering resilience.{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-md font-semibold text-primary opacity-80 font-inter uppercase  ">
                Resources
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a
                    href=""
                    className="hover:underline text-sm text-secondary font-poppins"
                  >
                    PAGASA
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:underline text-sm text-secondary font-poppins"
                  >
                    DRRMO
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md font-semibold text-primary opacity-80 font-inter uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a
                    href=""
                    className="hover:underline font-poppins text-secondary text-sm"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:underline font-poppins text-secondary text-sm"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md font-semibold text-primary opacity-80 font-inter uppercase">
                Legal
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline font-poppins text-secondary text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline font-poppins text-secondary text-sm"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center font-inter">
            © 2023 Agapay. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
