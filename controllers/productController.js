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
    const query = req.query
    console.log(query);
    let products;
    if (!query) {
      products = await Product.find();
    } else {
      products = await Product.find({
        $or: [
          { name: { $regex: query.name, $options: "i" } },
          { description: { $regex: query.description, $options: "i" } },
          { "variants.name": { $regex: query, $options: "i" } },
        ],
      });
    }
    res.status(200).json({ status: "success", products });
  } catch (error) {
    res.status(500).json({ status: "failed", error: error.message });
  }
};


// Update product
exports.updateProduct = async (req, res) => {
    const { productId } = req.params;
    try {
        if(productId) { 
            const updateProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
        if(!updateProduct) {
            return res.status(404).json({ status: 'failed', error: 'Product not found' });
        }
        res.status(200).json({ status: 'success', message: 'Product updated successfully', updateProduct });
        } else {
            res.status(400).json({ status: 'failed', message: 'Provide the productId' });
        }
        
    } catch (error) {
        res.status(500).json({ status: 'failed', error: error.message });
    }
}

