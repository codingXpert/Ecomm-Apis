const express = require('express');
const router = express.Router();
const productCOntroller = require('../controllers/productController')

router.post('/create', productCOntroller.createProduct);
router.get('/get', productCOntroller.getProducts);
router.get('/search', productCOntroller.searchProduct);
router.put('/update/:productId', productCOntroller.updateProduct);
router.delete('/delete/:productId', productCOntroller.deleteProduct);


module.exports = router;