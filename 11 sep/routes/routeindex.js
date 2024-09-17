const express = require("express");
const router = express.Router();
const productRouter = require("./productroute");
const authRouter = require("./authroute")



router.use("/product",productRouter);

router.use("/auth",authRouter)

module.exports = router