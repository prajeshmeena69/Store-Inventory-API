const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'Product name is required']
    },
    productCode: {
        type: String,
        required: [true, 'Product code is required'],
        unique: true
    },
    category: {
        type: String,
        enum: ['Electronics', 'Clothing', 'Food', 'Furniture']
    },
    supplierName: {
        type: String,
        required: [true, 'Supplier name is required']
    },
    quantityInStock: {
        type: Number,
        min: [0, 'Quantity cannot be negative']
    },
    reorderLevel: {
        type: Number,
        min: [1, 'Reorder level must be greater than 0']
    },
    unitPrice: {
        type: Number,
        min: [0.01, 'Unit price must be positive']
    },
    manufactureDate: {
        type: Date
    },
    productType: {
        type: String,
        enum: ['Perishable', 'Non-Perishable']
    },
    status: {
        type: String,
        enum: ['Available', 'Out of Stock'],
        default: 'Available'
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);