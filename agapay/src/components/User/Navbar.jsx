import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import styles from "../../style";
import { menu, assistance } from "../../assets";
import Login from "./Login";
import { ArrowRightCircleIcon, ArrowDownCircleIcon } from '@heroicons/react/24/outline'
const Navbar = () => {
   
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);
  const handleLoginModalToggle = () => {
    setLoginModalVisible(!isLoginModalVisible);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isPopoverHovered, setIsPopoverHovered] = useState(false);
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
         
        <div
          className={`flex items-center popoverHotline relative ${
            isPopoverHovered ? "z-0" : "z-10"
          }`}
          onMouseEnter={() => setIsPopoverHovered(true)}
          onMouseLeave={() => setIsPopoverHovered(false)}
        >
          <div className="group relative inline-block cursor-pointer">
  <h1 className="mr-6 text-sm  font-poppins hidden sm:block">(888) 25664</h1>
  <div className="invisible absolute z-10 mt-2  text-center  rounded-lg  right-32 -bottom-5   opacity-0 group-hover:visible group-hover:opacity-100 transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300">
    <p className=" py-4 px-2 text-primary relative text-xl font-semibold font-poppins whitespace-nowrap   shadow-md rounded-xl ">Along Malapitan Hotline</p>
  </div>
</div>

            <button
              className="text-md font-poppins font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300  text-secondary mr-3 hover:bg-secondary hover:text-white px-2 py-2 rounded-lg"
              onClick={handleLoginModalToggle}
            >
              Login
              <ArrowRightCircleIcon    className="w-6 h-6 inline-block ml-1" />
            </button>
            {isLoginModalVisible && <Login onClose={handleLoginModalToggle} />}
            {/* <Link
              className="text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300  font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg "
              to=""
            >
              Download
             <ArrowDownCircleIcon className="w-6 h-6 inline-block ml-1" />
            </Link> */}
            
          </div>
        </div>
      </nav>
      <nav
        className={`fixed top-0 w-full bg-primary
        ${
          isLoginModalVisible || isPopoverHovered? "z-0" : "z-10"
        }
        ${
          isLoginModalVisible? "z-0" : "z-10"
        }
        mt-24`}
      >
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex flex-row gap-2">
          <button
            className="block sm:hidden  text-white bg-primarydark py-2 px-2 rounded-lg"
            onClick={toggleNavbar}
          >
            <img src={menu} alt="" />
          </button>
          <span    onClick={toggleNavbar}  className="text-white block sm:hidden font-inter font-semibold text-lg">Menu</span>
          </div>
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
                  to="/nearby-services"
                  onClick={toggleNavbar}
                >
              Emergency Resources
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.navLinks}`}
                  to="/safety-guidelines"
                  onClick={toggleNavbar}
                >
                  Safety Guidelines
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