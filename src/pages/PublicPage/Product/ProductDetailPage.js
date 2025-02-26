import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../../components/NavBar";

const CategoryDetailPage = () => {

    const { id } = useParams();

    return (
        <div>
            <Navbar />
            <ProductDetail categoryId={id} />
        </div>
    );
};

export default CategoryDetailPage;
