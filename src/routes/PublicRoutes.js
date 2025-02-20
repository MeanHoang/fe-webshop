import React from "react";
import { Routes, Route } from "react-router-dom";

import SignInPage from "../pages/PublicPage/SignPage/SignInPage";
import SignUpPage from "../pages/PublicPage/SignPage/SignUpPage";

import Home from "../pages/PublicPage/About/Home";

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<SignInPage />} />

            <Route path="/" element={<Home />} />


        </Routes>
    );
};

export default PublicRoutes;
