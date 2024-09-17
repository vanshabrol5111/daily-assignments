const express = require("express");
const router = express.Router();
const {addProduct} = require("../function/post");
const {auth,isSeller} = require("../middlewares/auth");
const { getProducts } = require("../function/getProduct");
const {updateProductStatus} = require("../function/patch");
const { updateProduct } = require("../function/put");
const { deleteProduct } = require("../function/deleteProduct");

router.post("/addProduct",auth,isSeller,addProduct)
router.get("/getProducts",getProducts)
router.get("/getProducts/:id",getProducts)
router.put("/updateProduct/:id",auth,isSeller,updateProduct)
router.patch("/updateProductStatus/:id",auth,isSeller,updateProductStatus)
router.delete("/deleteProduct/:id",auth,isSeller,deleteProduct)

module.exports = router