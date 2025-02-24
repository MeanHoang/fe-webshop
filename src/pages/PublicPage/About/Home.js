import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../../components/NavBar";

const Home = () => {

    useEffect(() => {
        const user = localStorage.getItem("user");
        console.log("check user data: ", user);
    });

    return (
        <div>
            <Navbar />
            Trang chủ
        </div>
    );
};

export default Home;
