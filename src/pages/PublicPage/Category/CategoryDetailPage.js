import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../../../components/NavBar";
import CategoryDetail from "../../../features/categoryDetail/components/CategoryDetail";

const CategoryDetailPage = () => {

    const { id } = useParams();

    return (
        <div>
            <Navbar />
            <CategoryDetail categoryId={id} />
        </div>
    );
};

export default CategoryDetailPage;
