import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import apiInstance from "../../api/axiosInstance";
import "./Cart.css";
import { useCart } from "../../context/CartContext";



const Cart = () => {
    const { getCartCount } = useCart();
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCart = async () => {

        try {

            const res = await apiInstance.get("/cart/all");

            setCart(res.data.carts);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to load cart."
            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        getCart();

    }, []);

    const updateQuantity = async (id, quantity) => {

    try {

        await apiInstance.put(

            `/cart/update/${id}`,

            { quantity }

        );

        getCart();

    } catch (error) {

        toast.error(

            error.response?.data?.message ||

            "Unable to update quantity."

        );

    }

};

const increaseQuantity = async (item) => {

    try {

        await apiInstance.put(

            `/cart/update/${item._id}`,

            {

                quantity: item.quantity + 1

            }

        );

        getCart();

        getCartCount();

    } catch (error) {

        toast.error(

            error.response?.data?.message ||

            "Unable to update."

        );

    }

};

const decreaseQuantity = async (item) => {

    try {

        await apiInstance.put(

            `/cart/update/${item._id}`,

            {

                quantity: item.quantity - 1

            }

        );

        getCart();

        getCartCount();

    } catch (error) {

        toast.error(

            error.response?.data?.message ||

            "Unable to update."

        );

    }

};

const deleteItem = async (id) => {

    try {

        await apiInstance.delete(

            `/cart/delete/${id}`

        );

        toast.success("Item Removed");

        await getCart();

await getCartCount();

    } catch (error) {

        toast.error(

            error.response?.data?.message ||

            "Unable to delete."

        );

    }

};

    const grandTotal = cart.reduce((total, item) => {

        return total + (item.product.price * item.quantity);

    }, 0);

    return (

        <div className="container py-5">

            <h2 className="mb-4">
                My Cart
            </h2>

            {

                loading ? (

                    <h4 className="text-center">
                        Loading...
                    </h4>

                ) : cart.length === 0 ? (

                    <h4 className="text-center">
                        Your Cart is Empty
                    </h4>

                ) : (

                    <>

                        <div className="table-responsive">

                            <table className="table table-bordered align-middle">

                                <thead className="table-dark">

                                    <tr>

                                        <th>Image</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {

                                        cart.map((item) => (

                                            <tr key={item._id}>

                                                <td>

                                                    <img
                                                        src={`http://localhost:3000/uploads/${item.product.image}`}
                                                        alt={item.product.name}
                                                        className="cart-image"
                                                    />

                                                </td>

                                                <td>

                                                    {item.product.name}

                                                </td>

                                                <td>

                                                    ₹ {item.product.price}

                                                </td>

                                                <td>

                                                    <div className="d-flex align-items-center gap-2">

                                                        <button
                                                            className="btn btn-outline-danger btn-sm"
                                                            onClick={() => decreaseQuantity(item)}
                                                        >
                                                            -
                                                        </button>

                                                        <strong>

                                                            {item.quantity}

                                                        </strong>

                                                        <button
                                                            className="btn btn-outline-success btn-sm"
                                                            onClick={() => increaseQuantity(item)}
                                                        >
                                                            +
                                                        </button>

                                                    </div>

                                                </td>

                                                <td>

                                                    ₹ {item.product.price * item.quantity}

                                                </td>

                                                <td>

                                                   <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => deleteItem(item._id)}
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

                        <div className="text-end mt-4">

                            <h3>

                                Grand Total : ₹ {grandTotal}

                            </h3>

                            <button className="btn btn-success btn-lg mt-3">

                                Checkout

                            </button>

                        </div>

                    </>

                )

            }

        </div>

    );

};

export default Cart;