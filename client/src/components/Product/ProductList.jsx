import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import apiInstance from "../../api/axiosInstance";
import { Link } from "react-router-dom";
import "./ProductList.css";
import { useCart } from "../../context/CartContext";

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {getCartCount}= useCart()

    const getAllProducts = async () => {

        try {

            const res = await apiInstance.get("/product/all");

            setProducts(res.data.products);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to load products."
            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        getAllProducts();

    }, []);

    const addToCart = async (productId) => {

    try {

        const res = await apiInstance.post("/cart/add", {

            product: productId

        });

        toast.success(res.data.message);

        await getCartCount();

    } catch (error) {

        toast.error(
            error.response?.data?.message ||
            "Something went wrong."
        );

    }

};

        return (

        <div className="container py-5">

            <h2 className="text-center mb-4">

                Our Products

            </h2>

            <div className="row g-4">

                {

                    loading ?

                        <h4 className="text-center">

                            Loading...

                        </h4>

                        :

                        products.map((item) => (

                            <div
                                className="col-lg-3 col-md-4 col-sm-6"
                                key={item._id}
                            >

                                <div className="card product-card h-100">

                                    <Link to={`/product/${item._id}`}>

                                        <img
                                            src={`http://localhost:3000/uploads/${item.image}`}
                                            className="card-img-top"
                                            alt={item.name}
                                        />

                                    </Link>

                                    <div className="card-body">

                                        <Link
                                            to={`/product/${item._id}`}
                                            className="text-decoration-none text-dark"
                                        >

                                            <h5>{item.name}</h5>

                                        </Link>

                                        <p>

                                            {item.description}

                                        </p>

                                        <h4>

                                            ₹ {item.price}

                                        </h4>
                                                                                <button
                                            className="btn btn-primary w-100 mt-3"
                                            onClick={() => addToCart(item._id)}
                                        >
                                            Add To Cart
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))

                }

            </div>

        </div>

    );

};

export default ProductList;
