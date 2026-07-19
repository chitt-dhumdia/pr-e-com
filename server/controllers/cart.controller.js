import Cart from "../models/cart.model.js";

export const addToCart = async (req, res) => {

    try {

        const { product } = req.body;

        const user = req.user.id;

        const existCart = await Cart.findOne({
            product,
            user
        });

        if (existCart) {

            existCart.quantity += 1;

            await existCart.save();

            return res.status(200).json({
                message: "Cart Updated Successfully.",
                cart: existCart
            });

        }

        const cart = await Cart.create({

            product,

            user,

            quantity: 1

        });

        return res.status(201).json({

            message: "Product Added To Cart.",

            cart

        });

    } catch (error) {

        return res.status(500).json({

            message: error.message

        });

    }

};

export const getCart = async (req, res) => {

    try {

        const carts = await Cart.find({

            user: req.user.id

        })

        .populate("product");

        return res.status(200).json({

            carts

        });

    } catch (error) {

        return res.status(500).json({

            message: error.message

        });

    }

};

export const updateQuantity = async (req, res) => {

    try {

        const { id } = req.params;
        const { quantity } = req.body;

        if (quantity <= 0) {

            await Cart.findByIdAndDelete(id);

            return res.status(200).json({
                message: "Product Removed From Cart."
            });

        }

        const cart = await Cart.findByIdAndUpdate(

            id,

            { quantity },

            { new: true }

        );

        return res.status(200).json({

            message: "Quantity Updated.",

            cart

        });

    } catch (error) {

        return res.status(500).json({

            message: error.message

        });

    }

};

export const deleteCart = async (req, res) => {

    try {

        const { id } = req.params;

        await Cart.findByIdAndDelete(id);

        return res.status(200).json({

            message: "Product Removed From Cart."

        });

    } catch (error) {

        return res.status(500).json({

            message: error.message

        });

    }

};