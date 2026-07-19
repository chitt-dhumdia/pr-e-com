import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminLayout from "../../../components/admin/AdminLayout";
import apiInstance from "../../../api/axiosInstance";
import "./AddProduct.css";

const AddProduct = () => {

    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({

        name: "",

        price: "",

        description: "",

        category: "",

        image: null

    });

    const getAllCategory = async () => {

        try {

            const res = await apiInstance.get("/category/all");

            setCategories(res.data);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to load categories."
            );

        }

    };

    useEffect(() => {

        getAllCategory();

    }, []);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({

            ...formData,

            [name]: value

        });

    };

    const handleImage = (e) => {

        setFormData({

            ...formData,

            image: e.target.files[0]

        });

    };

        const handleSubmit = async (e) => {

        e.preventDefault();

        const { name, price, description, category, image } = formData;

        if (!name || !price || !description || !category || !image) {

            return toast.error("Please fill all fields.");

        }

        try {

            setLoading(true);

            const data = new FormData();

            data.append("name", name);
            data.append("price", price);
            data.append("description", description);
            data.append("category", category);
            data.append("image", image);

            const res = await apiInstance.post(
                "/product/create",
                data
            );

            toast.success(res.data.message);

            setFormData({

                name: "",

                price: "",

                description: "",

                category: "",

                image: null

            });

            document.getElementById("productImage").value = "";

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Something went wrong."
            );

        } finally {

            setLoading(false);

        }

    };

    

    return (

        <AdminLayout>

            <div className="add-product-container">

                <div className="product-card">

                    <h2>Add Product</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">

                            <label className="form-label">
                                Product Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter Product Name"
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label">
                                Price
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="Enter Price"
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label">
                                Description
                            </label>

                            <textarea
                                rows="4"
                                className="form-control"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter Description"
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label">
                                Category
                            </label>

                            <select
                                className="form-select"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Select Category
                                </option>

                                {

                                    categories.map((item) => (

                                        <option
                                            key={item._id}
                                            value={item._id}
                                        >

                                            {item.name}

                                        </option>

                                    ))

                                }

                            </select>

                        </div>

                        <div className="mb-4">

                            <label className="form-label">
                                Product Image
                            </label>

                            <input
                                type="file"
                                className="form-control"
                                id="productImage"
                                accept="image/*"
                                onChange={handleImage}
                            />

                        </div>

                        <button
                            className="btn btn-primary w-100"
                            disabled={loading}
                        >

                            {

                                loading

                                    ? "Adding..."

                                    : "Add Product"

                            }

                        </button>

                    </form>

                </div>

            </div>

        </AdminLayout>

    );

};

export default AddProduct;