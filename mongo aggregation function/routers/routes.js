const express=require("express");
const{match,group,project,sort,limit,count,unwind,firstEntry,lastEntry,expression,average,maxRating,minRating,sample,bucket}=require("../mainfuntion/function")
const router=express.Router();

router.get("/match",match)
router.get("/group",group)
router.get("/project",project)
router.get("/sort",sort)
router.get("/limit",limit)
router.get("/count",count)
router.get("/unwind",unwind)
router.get("/firstEntry",firstEntry)
router.get("/lastEntry",lastEntry)
router.get("/expression",expression)
router.get("/average",average)
router.get("/maxRating",maxRating)
router.get("/minRating",minRating)
router.get("/sample",sample)
router.get("/bucket",bucket)
module.exports=router