import React from 'react';
import { Outlet } from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin";

const useAuth = () => {
    // alert(auth);
    const user = { loggedIn : false };
    return user && user.loggedIn;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? < Outlet /> : < AdminLogin />
};

export default ProtectedRoutes;