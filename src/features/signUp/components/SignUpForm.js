import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { signUp } from "../services/signUp";

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        phonenumber: "",
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            const res = await signUp(formData);
            setMessage(res.message || "Đăng ký thành công!");
        } catch (err) {
            setError(err);
        }
    };

    return (
        <Container className="d-flex justify-content-center mt-5">
            <div className="p-4 border rounded shadow-sm" style={{ width: "400px" }}>
                <h2 className="text-center">Đăng ký</h2>
                {message && <Alert variant="success">{message}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Họ và tên</Form.Label>
                        <Form.Control
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control
                            type="tel"
                            name="phonenumber"
                            value={formData.phonenumber}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100 mb-2">
                        Đăng ký
                    </Button>
                    <Button
                        variant="secondary"
                        className="w-100"
                        onClick={() => navigate("/dang-nhap")}
                    >
                        Đăng nhập
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default SignUpForm;
