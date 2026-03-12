const Product = require('../models/productModel');

// Add new product
const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ message: 'Product added successfully', data: product });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ message: 'Products fetched successfully', data: products });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product fetched successfully', data: product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update product
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product updated successfully', data: product });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete product
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Search product by name
const searchProduct = async (req, res) => {
    try {
        const products = await Product.find({
            productName: { $regex: req.query.name, $options: 'i' }
        });
        res.status(200).json({ message: 'Search results', data: products });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Filter products by category
const filterByCategory = async (req, res) => {
    try {
        const products = await Product.find({ category: req.query.cat });
        res.status(200).json({ message: 'Filtered results', data: products });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    searchProduct,
    filterByCategory
};