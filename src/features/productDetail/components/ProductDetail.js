import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Spinner, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import './ProductDetail.scss';

const ProductDetail = ({ productId }) => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {

        };

        fetchProduct();
    }, [productId]);



    return (
        <div>Hello</div>
    );
};

export default ProductDetail;
