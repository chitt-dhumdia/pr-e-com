import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import apiInstance from "../../../api/axiosInstance.js";
import "./ProductDetails.css";

const ProductDetails = () => {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const getProduct = async () => {

        try {

            const res = await apiInstance.get(`/product/${id}`);

            setProduct(res.data);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to load product."
            );

        }

    };

    useEffect(() => {

        getProduct();

    }, [id]);

    if (!product) {

        return (

            <div className="container py-5 text-center">

                <h3>Loading...</h3>

            </div>

        );

    }

    return (

        <div className="container py-5">

            <div className="row">

                <div className="col-lg-5">

                    <img
                        src={`http://localhost:3000/uploads/${product.image}`}
                        className="img-fluid rounded shadow"
                        alt={product.name}
                    />

                </div>

                <div className="col-lg-7">

                    <h2>{product.name}</h2>

                    <h3 className="text-primary mt-3">

                        ₹ {product.price}

                    </h3>

                    <p className="mt-4">

                        {product.description}

                    </p>

                    <p>

                        <strong>Category :</strong>{" "}

                        {product.category?.name}

                    </p>

                    <button className="btn btn-primary me-3">

                        Add To Cart

                    </button>

                    <button className="btn btn-success">

                        Buy Now

                    </button>

                </div>

            </div>

        </div>

    );

};

export default ProductDetails;