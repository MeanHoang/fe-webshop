import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../../components/NavBar";

import SignUpForm from "../../../features/signUp/components/SignUpForm";

const SignUpPage = () => {
    return (
        <div>
            <Navbar />
            <SignUpForm />
        </div>
    );
};

export default SignUpPage;
