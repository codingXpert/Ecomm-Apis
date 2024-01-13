// tests/routes/product.test.js

const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');

describe('Product Endpoints', () => {
  let productId;

  beforeAll(async () => {
    const createProductRes = await request(app)
      .post('/api/product/create')
      .send({
        name: 'Test Product',
        description: 'This is a test product',
        price: 50,
        variants: [{ name: 'Test Variant', sku: 'TEST123', additional_cost: 5, stock_count: 20 }],
      });

    productId = createProductRes.body.product._id;
  });

  afterAll(async () => {

    await request(app).delete(`/api/product/delete/${productId}`);
    await mongoose.connection.close();
  });

  it('should create a new product', async () => {
    const createProductRes = await request(app)
      .post('/api/product/create')
      .send({
        name: 'New Product',
        description: 'This is a new product',
        price: 60,
        variants: [{ name: 'New Variant', sku: 'NEW123', additional_cost: 6, stock_count: 25 }],
      });

    expect(createProductRes.statusCode).toEqual(201);
    expect(createProductRes.body.status).toBe('success');
    expect(createProductRes.body.message).toBe('Product created successfully');
    expect(createProductRes.body.product).toBeDefined();
  });

  it('should get all products', async () => {
    const getProductsRes = await request(app).get('/api/product/get');

    expect(getProductsRes.statusCode).toEqual(200);
    expect(getProductsRes.body.status).toBe('success');
    expect(getProductsRes.body.products).toBeDefined();
    expect(getProductsRes.body.products.length).toBeGreaterThan(0);
  });

  it('should get a specific product', async () => {
    const getProductRes = await request(app).get(`/api/product/get/${productId}`);

    expect(getProductRes.statusCode).toEqual(200);
    expect(getProductRes.body.status).toBe('success');
    expect(getProductRes.body.product).toBeDefined();
    expect(getProductRes.body.product._id).toBe(productId);
  });

  it('should search products by name', async () => {
    const searchRes = await request(app).get('/api/product/search?name=Test');

    expect(searchRes.statusCode).toEqual(200);
    expect(searchRes.body.status).toBe('success');
    expect(searchRes.body.products).toBeDefined();
    expect(searchRes.body.products.length).toBeGreaterThan(0);
  });

  it('should search products by description', async () => {
    const searchRes = await request(app).get('/api/product/search?description=test');

    expect(searchRes.statusCode).toEqual(200);
    expect(searchRes.body.status).toBe('success');
    expect(searchRes.body.products).toBeDefined();
    expect(searchRes.body.products.length).toBeGreaterThan(0);
  });

  it('should search products by variant name', async () => {
    const searchRes = await request(app).get('/api/product/search?variant.name=Test');

    expect(searchRes.statusCode).toEqual(200);
    expect(searchRes.body.status).toBe('success');
    expect(searchRes.body.products).toBeDefined();
    expect(searchRes.body.products.length).toBeGreaterThan(0);
  });
});

