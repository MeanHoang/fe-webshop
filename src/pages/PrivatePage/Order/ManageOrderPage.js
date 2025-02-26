import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "../../../components/SideBar";
import Navbar from "../../../components/NavBar";

const ManageOrderPage = () => {
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
                    <h1>Lịch sử đơn hàng</h1>
                </div>
            </div>
        </div>
    );
};

export default ManageOrderPage;
