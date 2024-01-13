const mongoose = require('mongoose');
const Product = require('../models/productModel');

describe('Product Model', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create and save a product successfully', async () => {
    const productData = {
      name: 'Test Product',
      description: 'This is a test product',
      price: 100,
      variants: [{ name: 'Test Variant', sku: 'TEST123', additional_cost: 10, stock_count: 50 }],
    };
    const product = new Product(productData);
    const savedProduct = await product.save();

    expect(savedProduct._id).toBeDefined();
    expect(savedProduct.name).toBe(productData.name);
  });

  it('should retrieve products from the database', async () => {
    const products = await Product.find();

    expect(products).toBeDefined();
    expect(products.length).toBeGreaterThan(0);
  });
});
