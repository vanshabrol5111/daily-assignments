const express = require("express");
const {getPdct,postpdct,patchpdct,putpdct,deletepdct}=require("./function")
const {postValidation,putValidation,patchValidation}= require("./middlewares");
const router = express.Router();

router.get("/details/:id?",getPdct);
router.post("/add",postValidation,postpdct);
router.patch("/change/:id",patchValidation,patchpdct);
router.put("/changes/:id",putValidation,putpdct);

router.delete("/remove/:id",deletepdct);

module.exports=router