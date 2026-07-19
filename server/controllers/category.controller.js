import Category from "../models/category.model.js";

export const createCategory = async (req, res) => {
    try {

        const { name } = req.body;

        if (!name || name.trim() === "") {
            return res.status(400).json({
                message: "Category name is required."
            });
        }

        const existCategory = await Category.findOne({
            name: name.trim()
        });

        if (existCategory) {
            return res.status(400).json({
                message: "Category already exists."
            });
        }

        const category = await Category.create({
            name: name.trim()
        });

        return res.status(201).json({
            message: "Category Created Successfully.",
            category
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

export const getAllCategory = async (req, res) => {

    try {

        const categories = await Category.find();

        return res.status(200).json(categories);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};

export const updateCategory = async (req, res) => {

    try {

        const { id } = req.params;

        const { name } = req.body;

        if (!name || name.trim() === "") {
            return res.status(400).json({
                message: "Category name is required."
            });
        }

        const category = await Category.findByIdAndUpdate(
            id,
            {
                name: name.trim()
            },
            {
                new: true
            }
        );

        if (!category) {

            return res.status(404).json({
                message: "Category not found."
            });

        }

        return res.status(200).json({
            message: "Category Updated Successfully.",
            category
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};

export const deleteCategory = async (req, res) => {

    try {

        const { id } = req.params;

        const category = await Category.findByIdAndDelete(id);

        if (!category) {

            return res.status(404).json({
                message: "Category not found."
            });

        }

        return res.status(200).json({
            message: "Category Deleted Successfully."
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};