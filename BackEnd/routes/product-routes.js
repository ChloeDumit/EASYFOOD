const express = require('express')
const {addProduct, getAllProducts, getProduct, updateProduct, deleteProduct, getCategProds} = require('../models/productController')


const router = express.Router();

router.post('/newproduct', addProduct);
router.get('/allproducts', getAllProducts)
router.get('/product/:id', getProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)
router.get('/categories/:category', getCategProds)
module.exports = {
    routes: router
}