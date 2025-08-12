const express = require('express');
const router = express.Router();
const {createProduct, getProduct, deleteProduct} = require('../controllers/productController.js');


router.post('/', createProduct);
router.get('/', getProduct);
router.delete('/:id', deleteProduct);

module.exports = router;