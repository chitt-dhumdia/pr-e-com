

import React from "react";
import Slider from "../components/Slider";
import CategoryNavbar from "../components/CategoryNavbar";
import ProductList from "../components/Product/ProductList.jsx";

const Home = () => {
    return (
        <>

            <CategoryNavbar />

            <Slider />

            <ProductList />

        </>
    );
};

export default Home;
