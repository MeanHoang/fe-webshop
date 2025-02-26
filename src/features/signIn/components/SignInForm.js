import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import { signIn } from "../services/signIn";

const SignInForm = () => {
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const data = await signIn(emailOrPhone, password);
            localStorage.setItem("userId", JSON.stringify(data.user.id));

            toast.success(data.message);

            setTimeout(() => {
                window.location.href = "/";
            }, 2000);
        } catch (err) {
            setError(err);
        }
    };

    return (
        <Container className="d-flex justify-content-center mt-5">
            <div className="p-4 border rounded shadow-sm" style={{ width: "400px" }}>
                <h2 className="text-center">Đăng nhập</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email hoặc Số điện thoại</Form.Label>
                        <Form.Control
                            type="text"
                            value={emailOrPhone}
                            onChange={(e) => setEmailOrPhone(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Đăng nhập
                    </Button>
                </Form>
                <div className="text-center mt-3">
                    <Button
                        variant="outline-secondary"
                        className="w-100"
                        onClick={() => navigate("/dang-ky")}
                    >
                        Tạo tài khoản mới
                    </Button>
                </div>
            </div>
            <ToastContainer />

        </Container>


    );
};

export default SignInForm;
