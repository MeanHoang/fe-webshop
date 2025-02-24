import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

import AccountDetailPage from "../pages/PrivatePage/Account/AccoutDetailPage";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Route công khai */}
            <Route path="/*" element={<PublicRoutes />} />

            {/* Route bảo vệ */}
            <Route element={<PrivateRoutes />}>
                <Route path="/thong-tin-tai-khoan" element={<AccountDetailPage />} />

            </Route>

        </Routes>
    );
};

export default AppRoutes;
