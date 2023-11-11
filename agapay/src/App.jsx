import React, { useEffect, useState } from "react";
import "./index.css";
import { Navbar } from "./components/User";
import AppRoutes from "./Routes";
import SideBarResponder from "./components/Responder/SideBar";
import AdminSideBar from "./components/Admin/AdminSideBar";
import axios from "axios";
import { useLocation } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import LoaderComponent from "./components/LoaderComponent";
import Login from "./components/User/Login";
const App = () => {
  // const handleIsLoggedIn = (isLoggedIn) => {
  //   // alert("asd11: "+isLoggedIn);
  //   if(isLoggedIn){
  //     // alert("asd112: "+isLoggedIn);
  //     // checkSession();
  //   }
  // };
  const location = useLocation();
  // Check the current pathname
  const currentPath = location.pathname;
  const [isLoading, setIsloading] = useState(true);
  const [sessionStatus, setSessionStatus] = useState("loading");
  const [sessionUsertype, setSessionUsertype] = useState("loading");
  const [sessionUsername, setSessionUsername] = useState("loading");
  const [isDefault, setDefault] = useState(true);
  // Function to check/review session every minute
  const checkSession = () => {
    axios
      .get("http://localhost/Backend/CheckSession.php", {
        withCredentials: true,
      }) // Replace with your endpoint URL
      .then((response) => {
        // Handle the response data here
        // const { status, message } = response.data;

        // Access the 'status' and 'message' properties
        console.log("Status:", response.data.Status);
        console.log("Message:", response.data.Message);
        const { Status, UserType, Username } = response.data;
        setSessionStatus(Status);
        setSessionUsertype(UserType);
        setSessionUsername(Username);
        if (Status === "active" && UserType === "User") {
          console.log("User Type:", UserType);
          console.log("Username:", Username);
        }
        // Perform further actions based on the status
        // if (response.data.Status === 'active') {
        //   if (response.data.UserType === 'User') {
        //     console.log("User Type:", response.data.UserType);
        //     console.log("Username:", response.data.Username);
        //   }
        //   // User session is active, you can perform actions accordingly
        // } else if (response.data.Status === 'inactive') {
        //   // User session is inactive, you can redirect the user to the login page or perform other actions
        // }
      })
      .catch((error) => {
        console.error("Error checking session:", error);
      });
  };
  useEffect(() => {
    // alert(currentPath.startsWith('/admin'));
    // Initial check when component mounts
    checkSession();

    // Set interval to check session every minute (60,000 milliseconds)
    const interval = setInterval(checkSession, 5000);

    // Clear interval when the component is unmounted to prevent memory leaks
    return () => clearInterval(interval);
  }, [sessionStatus, sessionUsertype, sessionUsername]); // Empty dependency array ensures this effect runs once after initial render

  // useEffect(() => {
  //   // if (currentPath.startsWith("/admin") || currentPath.startsWith("/responder") && sessionStatus === "inactive") {
  //   //   return (window.location.href = "/adminlogin");
  //   // }
  // }, []);
  useEffect(() => {
    // Check if the session status is not 'loading' and other necessary conditions
    if (sessionStatus !== "loading") {
      // Data is loaded, set loading to false
      setIsloading(false);
    }
  }, [sessionStatus /* other dependencies */]);
  return isLoading ? (
    <LoaderComponent />
  ) : (
    <>
      {/* <Login asd={handleIsLoggedIn} /> */}
      {/* <Navbar /> */}
      <AppRoutes
        status={sessionStatus}
        userType={sessionUsertype}
        username={sessionUsername}
      />

      {currentPath.startsWith("/responder") !== true &&
        currentPath.startsWith("/admin") !== true &&
        sessionStatus !== "loading" && (
          <Navbar
            status={sessionStatus}
            userType={sessionUsertype}
            username={sessionUsername}
          />
        )}

      {/* <SideBarResponder /> */}
      {currentPath.startsWith("/admin") === true &&
        sessionUsertype !== "User" &&
        sessionStatus === "User" && <LoaderComponent />}
      {currentPath.startsWith("/responder") === true &&
        currentPath !== "/adminlogin" && (
          <SideBarResponder
            status={sessionStatus}
            userType={sessionUsertype}
            username={sessionUsername}
          />
        )}
      {currentPath.startsWith("/admin") === true &&
        currentPath !== "/adminlogin" && (
          <AdminSideBar
            status={sessionStatus}
            userType={sessionUsertype}
            username={sessionUsername}
          />
        )}
    </>
  );
};
export default App;
