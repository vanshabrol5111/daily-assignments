const express = require("express");
const{gettodo,posttodo,patchtodo,puttodo,deletetodo}=require("./function")
const router=express.Router();
router.get("/details/:id?",gettodo);
router.put("/changes/:id",puttodo);
router.patch("/change/:id",patchtodo);
router.post("/add",posttodo);
router.delete("/remove/:id",deletetodo);

module.exports=router