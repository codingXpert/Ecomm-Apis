const express = require('express');
const router = express.Router();
const productCOntroller = require('../controllers/productController')

router.post('/create', productCOntroller.createProduct);

module.exports = router;