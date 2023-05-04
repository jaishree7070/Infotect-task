const express = require('express');
const adminController=require('../controller/admin');
const router=express.Router();

// admin/add-product
router.get('/add-product',adminController.getAddProduct)
router.post('/add-product',adminController.postAddProduct)

//admin/products
router.get('/products',adminController.getProducts);

//admin/edit-product
router.get('/edit-product/:pid',adminController.getEditProduct)
router.post('/edit-product',adminController.postEditProduct)

//admin/delete
router.post('/delete/:pid',adminController.postDeleteProduct);

module.exports = router;