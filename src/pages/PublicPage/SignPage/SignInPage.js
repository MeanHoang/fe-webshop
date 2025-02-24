import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../../components/NavBar";

import SignInForm from "../../../features/signIn/components/SignInForm";

const SignInPage = () => {
    return (
        <div>
            <Navbar />
            <SignInForm />
        </div>
    );
};

export default SignInPage;
