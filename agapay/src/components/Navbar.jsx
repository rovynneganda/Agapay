import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import styles from "../style";
import { menu, assistance } from "../assets";
import Login from "./Login";
const Navbar = () => {
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);
  const handleLoginModalToggle = () => {
    setLoginModalVisible(!isLoginModalVisible);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="fixed top-0 w-full bg-white border-gray-200 z-10">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="#" className="flex items-center">
        <img src={logo} className="h-24  flex items-center" alt="Logo" />
          <img src={assistance} className="h-10  hidden sm:block" alt="Logo" />
        </a>
         
          <div className="flex items-center">
            <h1 className="mr-6 text-sm  text-gray-500 font-poppins hidden sm:block">
              (888) 25664
            </h1>
            <button
              className="text-md font-poppins font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300  text-secondary mr-3 hover:bg-lightgray px-2 py-2 rounded-lg"
              onClick={handleLoginModalToggle}
            >
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline-block ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            {isLoginModalVisible && <Login onClose={handleLoginModalToggle} />}
            <Link
              className="text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300  font-semibold text-primary mr-3 hover:bg-lightgray px-2 py-2 rounded-lg "
              to=""
            >
              Download
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline-block ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
      <nav
        className={`fixed top-0 w-full bg-primary ${
          isLoginModalVisible ? "z-0" : "z-10"
        } mt-24`}
      >
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <button
            className="block sm:hidden  text-white bg-secondary py-2 px-2 rounded-lg"
            onClick={toggleNavbar}
          >
            <img src={menu} alt="" />
          </button>
          <div className="flex items-center justify-center sm:justify-between  flex-wrap">
            <ul
              className={`${
                isOpen ? "flex" : "hidden"
              } sm:flex flex-col sm:flex-row font-medium mt-0 space-y-3 sm:space-y-0 sm:space-x-10 text-sm text-center`}
            >
              <li>
                <Link
                  className={`${styles.navLinks}`}
                  to="/"
                  onClick={toggleNavbar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.navLinks}`}
                  to="/emergency-resources"
                  onClick={toggleNavbar}
                >
                  Emergency Resources
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.navLinks}`}
                  to="/safety-reminders"
                  onClick={toggleNavbar}
                >
                  Safety Reminders
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.navLinks}`}
                  to="/about"
                  onClick={toggleNavbar}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
};
export default Navbar;
