import React from "react";
import { Routes, Route } from "react-router-dom";

import SignInPage from "../pages/PublicPage/SignPage/SignInPage";
import SignUpPage from "../pages/PublicPage/SignPage/SignUpPage";

import Home from "../pages/PublicPage/About/Home";

import CategoryDetailPage from "../pages/PublicPage/Category/CategoryDetailPage";

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/dang-nhap" element={<SignInPage />} />
            <Route path="/dang-ky" element={<SignUpPage />} />

            <Route path="/" element={<Home />} />

            <Route path="/danhmuc/:id" element={<CategoryDetailPage />} />

        </Routes>
    );
};

export default PublicRoutes;
