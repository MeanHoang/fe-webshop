import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    const userId = localStorage.getItem("userId");

    return userId ? <Outlet /> : <Navigate to="/dang-nhap" />;
};

export default PrivateRoutes;
