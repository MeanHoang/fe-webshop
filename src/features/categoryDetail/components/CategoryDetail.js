import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Spinner, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import getProductByCategoryId from "../services/getProductByCategoryId";
import './CategoryDetail.scss';

const CategoryDetail = ({ categoryId }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOption, setSortOption] = useState("default");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const data = await getProductByCategoryId(categoryId);
            if (data) setProducts(data);
            setLoading(false);
        };

        fetchProducts();
    }, [categoryId]);

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === "minPrice") return a.price - b.price;
        if (sortOption === "maxPrice") return b.price - a.price;
        if (sortOption === "latest") return new Date(b.created_at) - new Date(a.created_at);
        if (sortOption === "best_seller") return b.sold - a.sold;
        return 0;
    });

    return (
        <Container className="mt-4">
            <h3 className="mb-4 text-center">Danh mục sản phẩm</h3>
            <Row>
                <Col md={3}>
                    <div className="sidebar p-3 shadow-sm">
                        <h5>Sắp xếp theo</h5>
                        <Form.Select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                            <option value="default">Mặc định</option>
                            <option value="minPrice">Giá thấp đến cao</option>
                            <option value="maxPrice">Giá cao đến thấp</option>
                            <option value="latest">Mới nhất</option>
                            <option value="best_seller">Bán chạy nhất</option>
                        </Form.Select>
                    </div>
                </Col>

                <Col md={9}>
                    {loading ? (
                        <div className="text-center">
                            <Spinner animation="border" variant="primary" />
                        </div>
                    ) : (
                        <Row>
                            {sortedProducts.length > 0 ? (
                                sortedProducts.map((product) => (
                                    <Col key={product.id} md={6} lg={4} className="mb-4">
                                        <Card
                                            className="h-100 shadow-sm product-card"
                                            onClick={() => navigate(`/product/${product.id}`)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <Card.Img
                                                variant="top"
                                                src={product.image_url_default || "https://via.placeholder.com/200"}
                                                alt={product.name}
                                                className="product-img"
                                            />
                                            <Card.Body className="d-flex flex-column">
                                                <Card.Title className="product-title">{product.name}</Card.Title>
                                                <Card.Text className="product-desc">{product.desc}</Card.Text>
                                                <h5 className="text-danger">{product.price.toLocaleString()} VNĐ</h5>
                                                <Button variant="primary" className="w-100 mt-auto">
                                                    Mua ngay
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            ) : (
                                <p className="text-center w-100">Không có sản phẩm nào</p>
                            )}
                        </Row>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default CategoryDetail;
