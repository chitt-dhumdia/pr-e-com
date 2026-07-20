import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminLayout from "../../../components/admin/AdminLayout";
import apiInstance from "../../../api/axiosInstance";
import "./AllProduct.css";

const AllProduct = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const [editProduct, setEditProduct] = useState({
        _id: "",
        name: "",
        price: "",
        description: "",
        category: "",
        image: null
    });

    const [categories, setCategories] = useState([]);

    const getAllProduct = async () => {

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

    const getAllCategory = async () => {

    try {

        const res = await apiInstance.get("/category/all");

        setCategories(res.data);

    } catch (error) {

        toast.error("Unable to load categories.");

    }

};

    useEffect(() => {

    getAllProduct();

    getAllCategory();

}, []);

    const filterProduct = products.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

        const handleUpdate = async (e) => {

        e.preventDefault();

        try {

            const data = new FormData();

            data.append("name", editProduct.name);
            data.append("price", editProduct.price);
            data.append("description", editProduct.description);
            data.append("category", editProduct.category);

            if (editProduct.image) {

                data.append("image", editProduct.image);

            }

            const res = await apiInstance.put(

                `/product/update/${editProduct._id}`,

                data

            );

            toast.success(res.data.message);

            setShowModal(false);

            getAllProduct();

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Unable to update product."

            );

        }

    };

    const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {

        const res = await apiInstance.delete(
            `/product/delete/${id}`
        );

        toast.success(res.data.message);

        getAllProduct();

    } catch (error) {

        toast.error(
            error.response?.data?.message ||
            "Unable to delete product."
        );

    }

};

    return (

        <>

        <AdminLayout>

            <div className="all-category">

                <div className="category-header">

                    <h2>All Products</h2>

                    <input
                        type="text"
                        className="form-control search-box"
                        placeholder="Search Product..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

                <div className="table-responsive">

                    <table className="table table-bordered table-hover align-middle">

                        <thead className="table-dark">

                            <tr>

                                <th>#</th>

                                <th>Image</th>

                                <th>Product Name</th>

                                <th>Price</th>

                                <th>Category</th>

                                <th width="180">Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                loading ?

                                    <tr>

                                        <td colSpan="6" className="text-center">

                                            Loading...

                                        </td>

                                    </tr>

                                    :

                                    filterProduct.length === 0 ?

                                        <tr>

                                            <td colSpan="6" className="text-center">

                                                No Product Found

                                            </td>

                                        </tr>

                                        :

                                        filterProduct.map((item, index) => (

                                            <tr key={item._id}>

                                                <td>{index + 1}</td>

                                                <td>

                                                    <img
                                                        src={`http://localhost:3000/uploads/${item.image}`}
                                                        alt={item.name}
                                                        className="product-image"
                                                    />

                                                </td>

                                                <td>{item.name}</td>

                                                <td>₹ {item.price}</td>

                                                <td>{item.category?.name}</td>

                                                <td>

                                                    <button
                                                        className="btn btn-warning btn-sm "
                                                        onClick={() => {

                                                            setEditProduct({
                                                                _id: item._id,
                                                                name: item.name,
                                                                price: item.price,
                                                                description: item.description,
                                                                category: item.category?._id,
                                                                image: null
                                                            });

                                                            setShowModal(true);

                                                        }}
                                                    >

                                                        <i className="bi bi-pencil-square"></i>

                                                    </button>

                                                    <button
                                                        className="btn btn-danger btn-sm mt-2"
                                                        onClick={() => handleDelete(item._id)}
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

            </div>

            {

showModal && (

<div
className="modal fade show d-block"
tabIndex="-1"
style={{background:"rgba(0,0,0,.5)"}}
>

<div className="modal-dialog">

<div className="modal-content">

<div className="modal-header">

<h5>Edit Product</h5>

<button

className="btn-close"

onClick={()=>setShowModal(false)}

></button>

</div>

<form onSubmit={handleUpdate}>

<div className="modal-body">

<div className="mb-3">

<label>Product Name</label>

<input

type="text"

className="form-control"

value={editProduct.name}

onChange={(e)=>setEditProduct({

...editProduct,

name:e.target.value

})}

/>

</div>

<div className="mb-3">

<label>Price</label>

<input

type="number"

className="form-control"

value={editProduct.price}

onChange={(e)=>setEditProduct({

...editProduct,

price:e.target.value

})}

/>

</div>

<div className="mb-3">

<label>Description</label>

<textarea

className="form-control"

rows="3"

value={editProduct.description}

onChange={(e)=>setEditProduct({

...editProduct,

description:e.target.value

})}

/>

</div>

<div className="mb-3">

<label>Category</label>

<select

className="form-select"

value={editProduct.category}

onChange={(e)=>setEditProduct({

...editProduct,

category:e.target.value

})}

>

{

categories.map((item)=>(

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

<div className="mb-3">

<label>Image</label>

<input

type="file"

className="form-control"

onChange={(e)=>

setEditProduct({

...editProduct,

image:e.target.files[0]

})

}

/>

</div>

</div>

<div className="modal-footer">

<button

type="button"

className="btn btn-secondary"

onClick={()=>setShowModal(false)}

>

Close

</button>

<button

type="submit"

className="btn btn-primary"

>

Update Product

</button>

</div>

</form>

</div>

</div>

</div>

)

}

        </AdminLayout>
        </>

    );

};

export default AllProduct;