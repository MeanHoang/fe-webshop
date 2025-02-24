import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "../../../components/SideBar";
import Navbar from "../../../components/NavBar";
import AccountDetail from "../../../features/accountDetail/components/AccountDetail";

const AccountDetailPage = () => {
    useEffect(() => {
        const user = localStorage.getItem("user");
        console.log("check user data: ", user);
    }, []);

    return (
        <div className="d-flex flex-column vh-100">
            <Navbar />

            <div className="d-flex flex-grow-1">
                <div className="bg-light" style={{ width: "250px" }}>
                    <Sidebar />
                </div>

                <div className="flex-grow-1 p-4">
                    <AccountDetail />
                </div>
            </div>
        </div>
    );
};

export default AccountDetailPage;
