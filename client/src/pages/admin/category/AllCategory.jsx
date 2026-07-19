import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminLayout from "../../../components/admin/AdminLayout";
import apiInstance from "../../../api/axiosInstance";
import "./AllCategory.css";

const AllCategory = () => {

    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const [editId, setEditId] = useState("");
    const [editName, setEditName] = useState("");

    const getAllCategory = async () => {

        try {

            const res = await apiInstance.get("/category/all");

            setCategories(res.data);

        } catch (error) {

            toast.error(error.response?.data?.message || "Something went wrong.");

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        getAllCategory();

    }, []);

    const filteredCategory = categories.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this category?"
        );

        if (!confirmDelete) return;

        try {

            const res = await apiInstance.delete(`/category/delete/${id}`);

            toast.success(res.data.message);

            getAllCategory();

        } catch (error) {

            toast.error(error.response?.data?.message);

        }

    };

    const openEditModal = (category) => {

        setEditId(category._id);

        setEditName(category.name);

    };

    const handleUpdate = async (e) => {

        e.preventDefault();

        if (!editName.trim()) {

            return toast.error("Category name is required.");

        }

        try {

            const res = await apiInstance.put(
                `/category/update/${editId}`,
                {
                    name: editName
                }
            );

            toast.success(res.data.message);

            getAllCategory();

            setEditId("");

            setEditName("");

            const modal = document.getElementById("closeModal");

            modal.click();

        } catch (error) {

            toast.error(error.response?.data?.message);

        }

    };

    return (

        <AdminLayout>

            <div className="all-category">

                <div className="category-header">

                    <h2>All Categories</h2>

                    <input
                        type="text"
                        className="form-control search-box"
                        placeholder="Search Category..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

                <div className="table-responsive">

                    <table className="table table-bordered table-hover">

                        <thead className="table-dark">

                            <tr>

                                <th>No</th>

                                <th>Category Name</th>

                                <th width="180">Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                loading ?

                                    <tr>

                                        <td
                                            colSpan="3"
                                            className="text-center"
                                        >

                                            Loading...

                                        </td>

                                    </tr>

                                    :

                                    filteredCategory.length === 0 ?

                                        <tr>

                                            <td
                                                colSpan="3"
                                                className="text-center"
                                            >

                                                No Category Found

                                            </td>

                                        </tr>

                                        :

                                        filteredCategory.map((item, index) => (

                                            <tr key={item._id}>

                                                <td>{index + 1}</td>

                                                <td>{item.name}</td>

                                                <td>

                                                    <button
                                                        className="btn btn-warning btn-sm me-2"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#editModal"
                                                        onClick={() =>
                                                            openEditModal(item)
                                                        }
                                                    >

                                                        <i className="bi bi-pencil-square"></i>

                                                    </button>

                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() =>
                                                            handleDelete(item._id)
                                                        }
                                                    >

                                                        <i className="bi bi-trash"></i>

                                                    </button>

                                                </td>

                                            </tr>

                                        ))
                            }

                        </tbody>

                    </table>

                </div>

                                <div
                    className="modal fade"
                    id="editModal"
                    tabIndex="-1"
                    aria-hidden="true"
                >

                    <div className="modal-dialog">

                        <div className="modal-content">

                            <div className="modal-header">

                                <h5 className="modal-title">

                                    Update Category

                                </h5>

                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                ></button>

                            </div>

                            <form onSubmit={handleUpdate}>

                                <div className="modal-body">

                                    <label className="form-label">

                                        Category Name

                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={editName}
                                        onChange={(e) =>
                                            setEditName(e.target.value)
                                        }
                                    />

                                </div>

                                <div className="modal-footer">

                                    <button
                                        className="btn btn-warning btn-sm me-2 action-btn"
                                    >
                                        Close
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm action-btn"
                                    >
                                        Update
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </AdminLayout>

    );

};

export default AllCategory;