import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import styles from "../../style";
import { menu, assistance } from "../../assets";
import Login from "./Login";
import {
  ChevronDownIcon,
  Bars3BottomLeftIcon
} from "@heroicons/react/24/outline";
import {HomeIcon , ShieldExclamationIcon,  BookmarkSquareIcon,  InformationCircleIcon, ArrowRightCircleIcon,UserCircleIcon,PhoneIcon  } from "@heroicons/react/20/solid"
import axios from "axios";

export const handleLogout = (isLoggedIn, isNavbar) => {
  return new Promise((resolve) => {
    const formDataToObject = { fileSelector: "Logout" };
    axios
      .post("http://localhost/Backend/Controller.php", formDataToObject, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        // Handle the response from the API
        if (response.data === "Session Destroyed.") {
          // Additional logout logic can be added here if needed
          resolve(); // Resolve the promise after successful logout
        } else {
          console.log("error");
          resolve(); // Resolve the promise even in case of an error
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        resolve(); // Resolve the promise in case of an error
      });
  });
};

const Navbar = ({ status, userType, username, isLoggedInSessionToParent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const isLoggedInSession = (data) => {
    // Call the function passed from the parent (ParentComponent)
    isLoggedInSessionToParent(data);
  };
  const logout = (data) => {
    // Call the function passed from the parent (ParentComponent)
    isLoggedInSessionToParent(data);
  };
  // let bool;
  // if(status === "active"){
  //   bool = true;
  // }else{
  //   bool = false;
  // }
  // alert(status);
  const [isLoggedIn, setIsLoggedIn] = useState(status);
  useEffect(() => {
    // alert(userType);
    if (status === "active" && userType === "User") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    // alert(isLoggedIn);
    // alert(isLoggedIn);
  }, [status]); // Empty dependency array ensures this effect runs once after initial render

  // const handleLogin = () => {
  //   if (userType === 'User'){
  //     alert('titi');
  //   }
  //   // Here you can implement your login logic.
  //   // For example, you can make an API call to authenticate the user.
  //   // If authentication is successful, update the isLoggedIn state to true.

  //   // For now, I'll just toggle the login status for demonstration purposes.
  //   setIsLoggedIn(!isLoggedIn);
  // };

  // const [sessionStatus, setSessionStatus] = useState('loading');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);
  const handleLoginModalToggle = () => {
    setLoginModalVisible(!isLoginModalVisible);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isPopoverHovered, setIsPopoverHovered] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  //  phone number for Along Hotline
  const phoneNumber11 = "(888) 25664";
  const [showModalphone11, setShowModalphone11] = useState(false);
  useEffect(() => {
      
    if (showModalphone11) {
      document.body.style.overflow = 'hidden';  
    } else {
      document.body.style.overflow = 'auto';  
    }

    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModalphone11]);
  const handleCallClick11 = () => {
    setShowModalphone11(true);
  };

  const handleConfirmCall11 = () => {
    makePhoneCall11();
    setShowModalphone11(false);
  };

  const handleCancelCall11 = () => {
    setShowModalphone11(false);
  };

  const makePhoneCall11 = () => {
    window.location.href = `tel:${phoneNumber11}`;
  };

  // end phone number for 4th avenue station

  return (
    <>
      <nav className={`fixed top-0 w-full bg-white border-gray z-20   shadow-b shadow-md`}>
        <div className="flex flex-wrap lg:justify-between md:justify-center justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <img src={logo} className="h-24 p-2   flex items-center" alt="Logo" />
            <img
              src={assistance}
              className="h-10  hidden "
              alt="Logo"
            />
          </a>
          <div className=" items-center justify-center sm:justify-between flex-wrap hidden md:flex ">
            <ul
              className={`${
                isOpen ? "flex" : "hidden"
              } sm:flex flex-col sm:flex-row font-medium mt-0 space-y-3 sm:space-y-0 sm:space-x-10 text-sm text-center`}
            >
              <li>
                <Link
                  className={`${styles.navLinks1}`}
                  to="/"
                  onClick={toggleNavbar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.navLinks1}`}
                  to="/emergencyresources"
                  onClick={toggleNavbar}
                >
                  Emergency Resources
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.navLinks1}`}
                  to="/safety-guidelines"
                  onClick={toggleNavbar}
                >
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.navLinks1}`}
                  to="/about"
                  onClick={toggleNavbar}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`flex items-center popoverHotline relative ${
              isPopoverHovered ? "z-0" : "z-10"
            }`}
            onMouseEnter={() => setIsPopoverHovered(true)}
            onMouseLeave={() => setIsPopoverHovered(false)}
          >
            <div className="group relative inline-block cursor-pointer">
              <h1
                onClick={handleCallClick11}
                className="mr-6 text-sm  font-poppins "
              >
                (888) 25664
              </h1>
              <div className="flex  flex-row items-center gap-2 justify-center absolute z-10 mt-2 text-center rounded-xl -top-10 right-0 opacity-0 group-hover:visible group-hover:opacity-100 ">
  <p className=" text-primary font-inter font-semibold backdrop:shadow-sm  bg-white">
    Along  
  </p>
  <p className=" text-primary font-inter font-semibold backdrop:shadow-sm bg-white ">Malapitan</p>
  <p className=" text-primary font-inter font-semibold backdrop:shadow-sm  bg-white">Hotline</p>
</div>
            </div>
            {/* <button
              className="text-md font-poppins font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300  text-secondary mr-3 hover:bg-secondary hover:text-white px-2 py-2 rounded-lg"
              onClick={handleLoginModalToggle}
            >
              robinamaganda
              <ChevronDownIcon    className="w-6 h-6 inline-block ml-1" />
            </button> */}
            {isLoggedIn ? (
              <>
                <div className=" items-center ml-3 md:flex hidden">
                  <div>
                    <button
                      type="button"
                      onClick={toggleDropdown}
                      className="text-md font-poppins font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300  text-secondary mr-3 hover:bg-secondary hover:text-white px-2 py-2 rounded-lg"
                      aria-expanded={isDropdownOpen ? "true" : "false"}
                    >
                      <span className="sr-only">Open user menu</span>
                      <UserCircleIcon className="w-5 h-5 mb-1 inline-block mr-1" />
                      {userType === "User" ? username : "Please Log In."}
                      <ChevronDownIcon className="w-5 h-5 inline-block ml-1" />
                    </button>
                  </div>
                  <div
                    // onMouseLeave={toggleDropdown}
                    className={` ${
                      isDropdownOpen ? "block" : "hidden"
                    } absolute right-5 top-12 mt-2 z-[20]  list-none bg-white divide-gray/20 divide-y  rounded shadow `}
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm font-inter text-primary ">
                        {userType === "User" ? username : "Please Log In."}
                      </p>
                      <p className="text-sm font-medium  truncate font-inter ">
                        jokoiloveyou@gmail.com
                      </p>
                    </div>
                    <ul className="py-1">
                      <li>
                        <Link
                          to="/user/accountdetails"
                          onClick={isDropdownOpen}
                          className="block px-4 py-2 text-sm text-gray/80 hover:text-black hover:bg-gray/20   "
                        >
                          Account Details
                        </Link>
                      </li>
                      <li>
                        <a
                         
                         onClick={async () => {
                          await handleLogout(false, true);
                          logout(true);
                          alert('titi');
                          console.log('wala na')
                          toggleDropdown();
                        }}
                          className="block px-4 py-2 text-sm cursor-pointer  text-gray/80 hover:text-black hover:bg-gray/20 "
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <button
                className="text-md font-poppins md:block hidden font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300  text-secondary mr-3 hover:bg-secondary hover:text-white px-2 py-2 rounded-lg"
                onClick={handleLoginModalToggle}
              >
                Login
                <ArrowRightCircleIcon className="w-6 h-6 inline-block ml-1" />
              </button>
            )}
 <button
          onClick={toggleSidebar}
          aria-expanded={isSidebarOpen ? "true" : "false"}
          type="button"
          className="inline-flex items-center p-2 mt-2 mr-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3BottomLeftIcon className="w-8 h-8 text-secondary/90 font-bold" />
        </button>

            {isLoginModalVisible && (
              <Login
                onClose={handleLoginModalToggle}
                isLoggedInSession={isLoggedInSession}
              />
            )}
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
      {/* <nav
        className={`fixed top-0 w-full bg-primary sm:block hidden
        ${isDropdownOpen ? "z-[5]" : "z-10"}
        ${isLoginModalVisible || isPopoverHovered ? "z-[5]" : "z-10"}
        ${isLoginModalVisible ? "z-[5]" : "z-10"}
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
            <span
              onClick={toggleNavbar}
              className="text-white block sm:hidden font-inter font-semibold text-lg"
            >
              Menu
            </span>
          </div>
          <div className="flex items-center justify-center sm:justify-between flex-wrap">
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
      </nav> */}

      {/* // phone number for 4th avenue station */}
      <aside
  className={`fixed top-0 right-0 z-10 w-64 h-screen transition-transform ${
    isSidebarOpen ? "transform translate-x-0" : "transform translate-x-full"
  } bg-white`}
  aria-label="Sidebar"
>
  <div className={`overflow-y-auto py-5 px-3 h-full bg-primary mt-30 transition-opacity ${
    isSidebarOpen ? "opacity-100" : "opacity-0"
  }`}>
    {/* <img src={logo} className="w-16 h-16 mx-auto mb-5" alt="Agapay Logo" />   */}
    <ul className="space-y-2 mt-24">
 
    <Link
  className={`${styles.navPhone} flex items-center w-full`}
  to="/"
  onClick={toggleSidebar}
>
  <HomeIcon className="w-5 h-5 inline-block mr-3" />
  Home
</Link>
      <Link className={`${styles.navPhone} flex items-center w-full`}
  to="/emergencyresources"
  onClick={toggleSidebar}>
      <ShieldExclamationIcon className="w-5 h-5 inline-block mr-3" />
        Emergency Resources
      </Link>
      <Link className={`${styles.navPhone} flex items-center w-full`}
   to="/safety-guidelines"
   onClick={toggleSidebar}>
      <BookmarkSquareIcon className="w-5 h-5 inline-block mr-3" />
        Safety Guidelines
      </Link>
      <Link className={`${styles.navPhone} flex items-center w-full`}
      to="/about"
      onClick={toggleSidebar}
      >
      <InformationCircleIcon className="w-5 h-5 inline-block mr-3" />
        About
      </Link>
    </ul>
    <div className="text-center mt-16">
    {isLoggedIn ? 
   (
    <>
    <div className="flex items-center justify-center ml-3">
      <div>
        <button
          type="button"
          onClick={toggleDropdown1}
          className="text-xl font-poppins bg-white  font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300  text-secondary mr-3   px-2 py-2 rounded-lg"
          aria-expanded={isDropdownOpen1 ? "true" : "false"}
        >
          <span className="sr-only">Open user menu</span>
          <UserCircleIcon className="w-5 h-5 mb-1 inline-block mr-1" />
          {userType === "User" ? username : "Please Log In."}
          <ChevronDownIcon className="w-5 h-5 inline-block ml-1" />
        </button>
      </div>
      <div
        // onMouseLeave={toggleDropdown1}
        className={` ${
          isDropdownOpen1 ? "block" : "hidden"
        } absolute right-5 top-12 mt-[375px] z-[20]  list-none bg-white divide-gray/20 divide-y  rounded shadow `}
      >
        <div className="px-4 py-3">
          <p className="text-sm font-inter text-primary ">
            {userType === "User" ? username : "Please Log In."}
          </p>
          <p className="text-sm font-medium  truncate font-inter ">
            jokoiloveyou@gmail.com
          </p>
        </div>
        <ul className="py-1">
          <li>
            <Link
              to="/user/accountdetails"
              onClick={isDropdownOpen1}
              className="block px-4 py-2 text-sm text-gray/80 hover:text-black hover:bg-gray/20   "
            >
              Account Details
            </Link>
          </li>
          <li>
            <a
             
             onClick={async () => {
              await handleLogout(false, true);
              logout(true);
              alert('titi');
              toggleDropdown1();
            }}
              className="block px-4 py-2 text-sm cursor-pointer  text-gray/80 hover:text-black hover:bg-gray/20 "
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  </>
   ) : (
    <button
    className="text-md font-poppins bg-white font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300  text-secondary mr-3  px-2 py-2 rounded-lg"
    onClick={handleLoginModalToggle}
  >
    Login
    <ArrowRightCircleIcon className="w-6 h-6 inline-block ml-1" />
  </button>
   )
  }
    </div>
  </div>
</aside>


      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0"
          onClick={toggleSidebar}
        ></div>
      )}
{showModalphone11 && (
  <div className="fixed top-0 z-50  left-0 w-full  h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full max-w-md max-h-full p-5">
        <div className="bg-white p-8 rounded-lg shadow-lg">
        <PhoneIcon className="h-12 w-12 mb-5 mx-auto text-primary animate-pulse" />
      <p className="mb-4 font-inter text-center leading-loose">Are you sure you want to call {phoneNumber11}?</p>
      <div className="flex flex-row  justify-center items-center">
      <button
        className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
        onClick={handleConfirmCall11}
      >
        Yes
      </button>
      <button
       className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
        onClick={handleCancelCall11}
      >
        No
      </button>
</div>
    </div>
</div>
  </div>
)}
    </>
  );
};

export default Navbar;
