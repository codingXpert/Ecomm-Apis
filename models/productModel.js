const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
    name: String,
    sku: String,
    additional_cost: Number,
    stock_count: Number
});

const productSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    variants: [variantSchema]
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;