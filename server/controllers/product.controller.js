import Product from "../models/product.model.js";

export const addProduct = async (req, res) => {
    try {

        const { name, price, description, category } = req.body;

        if (!name || !price || !description || !category) {
            return res.status(400).json({
                message: "Please fill all fields."
            });
        }

        if (!req.file) {
            return res.status(400).json({
                message: "Product image is required."
            });
        }

        const product = await Product.create({
            name,
            price,
            description,
            category,
            image: req.file.filename
        });

        return res.status(201).json({
            message: "Product added successfully.",
            product
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

export const getAllProduct = async (req, res) => {

    try {

        const products = await Product.find().populate("category");

        return res.status(200).json({
            message: "All Products",
            products
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};

export const getProductByID = async (req, res) => {

    try {

        const { id } = req.params;

        const product = await Product.findById(id).populate("category");

        if (!product) {

            return res.status(404).json({
                message: "Product not found."
            });

        }

        return res.status(200).json(product);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};

export const updateProduct = async (req, res) => {

    try {

        const { id } = req.params;

        const { name, price, description, category } = req.body;

        const updateData = {
            name,
            price,
            description,
            category
        };

        if (req.file) {
            updateData.image = req.file.filename;
        }

        const product = await Product.findByIdAndUpdate(
            id,
            updateData,
            {
                new: true
            }
        );

        if (!product) {

            return res.status(404).json({
                message: "Product not found."
            });

        }

        return res.status(200).json({
            message: "Product updated successfully.",
            product
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};

export const deleteProduct = async (req, res) => {

    try {

        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {

            return res.status(404).json({
                message: "Product not found."
            });

        }

        return res.status(200).json({
            message: "Product deleted successfully.",
            product
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};