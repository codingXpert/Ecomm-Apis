const express = require('express');
const router = express.Router();
const productCOntroller = require('../controllers/productController')

router.post('/create', productCOntroller.createProduct);
router.get('/get', productCOntroller.getProducts);
router.put('/update/:productId', productCOntroller.updateProduct);


module.exports = router;