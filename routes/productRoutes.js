const express = require('express');
const router = express.Router();
const {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    searchProduct,
    filterByCategory
} = require('../controllers/productController');

// Search and filter routes (must be before /:id)
router.get('/search', searchProduct);
router.get('/category', filterByCategory);

// Main CRUD routes
router.post('/', addProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;