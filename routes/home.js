const express = require("express");
const homeController = require("../controller/home");

const router=express.Router();

router.get("/products", homeController.getProducts);

module.exports = router;
