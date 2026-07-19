import { useState } from "react";
import { toast } from "react-toastify";
import apiInstance from "../../../api/axiosInstance";
import AdminLayout from "../../../components/admin/AdminLayout";
import "./AddCategory.css";

const AddCategory = () => {

    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            return toast.error("Category name is required.");
        }

        try {

            setLoading(true);

            const res = await apiInstance.post("/category/create", {
                name
            });

            toast.success(res.data.message);

            setName("");

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Something went wrong."
            );

        } finally {

            setLoading(false);

        }
    };

    return (

        <AdminLayout>

            <div className="add-category-container">

                <div className="category-card">

                    <h2>Add Category</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-4">

                            <label className="form-label">

                                Category Name

                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Category Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={loading}
                        >

                            {
                                loading
                                    ? "Adding..."
                                    : "Add Category"
                            }

                        </button>

                    </form>

                </div>

            </div>

        </AdminLayout>

    );
};

export default AddCategory;