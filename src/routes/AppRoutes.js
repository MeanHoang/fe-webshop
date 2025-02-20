import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";


const AppRoutes = () => {
    return (
        <Routes>
            {/* Route công khai */}
            <Route path="/*" element={<PublicRoutes />} />

            {/* Route bảo vệ */}
            <Route element={<PrivateRoutes />}>

            </Route>

        </Routes>
    );
};

export default AppRoutes;
