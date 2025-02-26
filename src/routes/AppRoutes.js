import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

import AccountDetailPage from "../pages/PrivatePage/Account/AccoutDetailPage";
import ManageOrderPage from "../pages/PrivatePage/Order/ManageOrderPage";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Route công khai */}
            <Route path="/*" element={<PublicRoutes />} />

            {/* Route bảo vệ */}
            <Route element={<PrivateRoutes />}>
                <Route path="/thong-tin-tai-khoan" element={<AccountDetailPage />} />
                <Route path="/lich-su-don-hang" element={<ManageOrderPage />} />

            </Route>

        </Routes>
    );
};

export default AppRoutes;
