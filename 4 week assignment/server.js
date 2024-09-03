const express = require("express");
const {Readfile,UpdateFile,WriteFile,deleteRecord} = require("./fileModules");
const server = express();

server.use(express.json());

server.get("/", async(req,res)=>{

   const {id}=req.body
   console.log(id)
   try{
    
    let details;
   await Readfile("details.json",id).then((item)=>details=item);

    const userdata = details.find((elem)=>elem.id===id)
    if(userdata)
    {
       
       return res.status(200).json(userdata);
    }
    else if(!userdata && id)
    {
       return res.status(400).json({
            message : "Enter Valid id"
        });
    }

     return res.status(200).json(details);

   }catch (err){
    res.status(404).json({
        error : err,
        message : "Could Not fetch Details!!! Try Again"
    })
   }
})

server.put("/",async (req,res)=>{
    try{
        const {id,name} = req.body
    let details;
   await UpdateFile("details.json",id,name).then((item)=>details=item);
 
   return res.status(200).json({message:"Data Updated Successfully",
    res:details
   })
    }catch (err){
        res.json({
            error : err,
            message : "Could Not Update Data!!! Try Again"
        })
    }
})

server.post("/",async (req,res)=>{
    try{

        const {id,name} = req.body
        if(!id || !name)
        {
            return res.status(400).json({message:"Please Enter All details!!!"})
        }
        else
        {
            let details;
            await WriteFile("details.json",id,name).then((item)=>details=item);
            
            return res.status(201).json({message:"Data Created Successfully",
             res:details
            })
             }
        }catch (err){
            res.status(700).json({
                error : err,
                message : "Could Not Post Data!!! Try Again"
            })
        }
   
})

server.delete("/:id",async (req,res)=>{
    try{
        const {id} = req.params
    let details;
   const response=await deleteRecord("details.json",id).then((item)=>details=item);
   
  if(response){
    return res.status(200).json({message:"Data Deleted Successfully",
        res:details
       })
  }
  else{
    res.status(700).json({
        error : err,
        message : "Could Not Delete Data!!! Try Again"
    })
  }
    }catch (err){
        res.status(700).json({
            error : err,
            message : "Could Not Delete Data!!! Try Again"
        })
    }
})

server.listen(5000,()=>{
    console.log("Server Started Successfully at port 5000")
})