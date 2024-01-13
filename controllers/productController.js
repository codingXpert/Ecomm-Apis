const Product = require("../models/productModel");

// create product
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({
      status: "Success",
      message: "Product Created Successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "failed to create product",
      error: error.message,
    });
  }
};

//get product
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ status: "success", products });
  } catch (error) {
    res.status(500).json({ status: "failed", error: error.message });
  }
};

// Update product
exports.updateProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    if (productId) {
      const updateProduct = await Product.findByIdAndUpdate(
        productId,
        req.body,
        { new: true }
      );
      if (!updateProduct) {
        return res
          .status(404)
          .json({ status: "failed", error: "Product not found" });
      }
      res.status(200).json({
        status: "success",
        message: "Product updated successfully",
        updateProduct,
      });
    } else {
      res
        .status(400)
        .json({ status: "failed", message: "Provide the productId" });
    }
  } catch (error) {
    res.status(500).json({ status: "failed", error: error.message });
  }
};

//Delete Product
exports.deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const deleteProduct = await Product.findByIdAndDelete(productId);
    if (!deleteProduct) {
      return res
        .status(404)
        .json({ status: "failed", error: "Product not found" });
    }
    res
      .status(200)
      .json({ status: "success", message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: "failed", error: error.message });
  }
};

// Search Products
exports.searchProduct = async (req, res) => {
  try {
    const { name, description, variantName } = req.query;
    let products;
    if (!name && !description && !variantName) {
      return res
        .status(400)
        .json({ status: "failed", message: "Enter the searching string" });
    }

    const queryConditions = [];
    if (name) {
      queryConditions.push({ name: { $regex: name, $options: "i" } });
    }
    if (description) {
      queryConditions.push({
        description: { $regex: description, $options: "i" },
      });
    }
    if (variantName) {
      queryConditions.push({
        "variants.name": { $regex: variantName, $options: "i" },
      });
    }
    products = await Product.find({ $or: queryConditions });
    res.status(200).json({ status: "success", products });
  } catch (error) {
    res.status(500).json({ status: "failed", error: error.message });
  }
};
