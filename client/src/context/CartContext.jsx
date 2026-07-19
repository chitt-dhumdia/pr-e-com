import { createContext, useContext, useEffect, useState } from "react";
import apiInstance from "../api/axiosInstance";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartCount, setCartCount] = useState(0);

    const getCartCount = async () => {

        try {

            const res = await apiInstance.get("/cart/all");

            const total = res.data.carts.reduce((sum, item) => {

                return sum + item.quantity;

            }, 0);

            setCartCount(total);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        getCartCount();

    }, []);

    return (

        <CartContext.Provider

            value={{

                cartCount,

                getCartCount

            }}

        >

            {children}

        </CartContext.Provider>

    );

};

export const useCart = () => {

    return useContext(CartContext);

};