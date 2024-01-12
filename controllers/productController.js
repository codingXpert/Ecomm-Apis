const Product = require("../models/productModel");

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res
      .status(201)
      .json({
        status: "Success",
        message: "Product Created Successfully",
        product,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        status: "failed",
        message: "failed to create product",
        error: error.message,
      });
  }
};
