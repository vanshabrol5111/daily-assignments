const { abc } = require("./data");
const { v4: uuidv4 } = require('uuid');
class Product{
 
    constructor(id,name,description,price,instock){
    this.id  =id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.instock = instock

    }
    addPdct(data){
        abc.push(data);
        return true
    }

}

async function getPdct(req,res) {
  
    try{
        const {id} = req.params;
    if(id)
    {
        const data = abc.find((item)=>item.id===id)
        if(data)
        {
            return res.status(200).json({
                message:"Fetched Successfully!!!",
                data:data
            })
        }
        else
        {
            return res.status(400).json({
                message:"Could Not find Data ",
                
            })
        }
    }
    else
    {
        return res.status(200).json({
            data : abc
        })
    }
    } catch (err){
        return res.status(500).json({
            message : "Error in  Fetching Data "
        })
    }
   
}
async function postpdct(req,res) {
    try{
        const {name,description,price,instock} =req.body
   id = uuidv4();
    const NewPdct = new Product(id,name,description,price,instock);
  

   const response =  NewPdct.addProduct(NewPdct)
   if(response)
   {
    return res.status(200).json({
        message:"Posted successfully",
        data:abc
    })
   }
   else
   {
    return res.status(500).json({
        message:"Error in Posting "
    })
   }
    } catch (err)
    {
        return res.status(500).json({
            message :"Error in  Posting  a New Product"
        })
    }

}
async function patchpdct(req,res) {
    try{
        const {id} = req.params
    const {instock} = req.body;
    const data = abc.find((item)=>item.id===id);
  if(data)
  {
    data.instock = instock;
    return res.status(200).json({
        message:"Instock Status updated succesfully"
    })
  }
  else{
    return res.status(400).json({
        message : "Could Not find Data"
    })
  }
    } catch (err){
        return res.status(500).json({
            message:"Error in instock status"
        })
    }
}
async function putpdct(req,res) {
  try{
    const {id} = req.params
    const {name,description,price,instock} = req.body;
  
    const data =  abc.find((item)=>item.id===id);
   if(data)
   {
     data.name = name;
 data.description = description;
 data.price = price;
 data.instock = instock;
 
 return res.status(200).json({
     message:"Data Updated Successfully",
    })
   }
 else{
     return res.status(400).json({
         message:"Could not find data",
        })
 }
 
  } catch (err){
    return res.status(500).json({
        message:"Error in  Updating Data"
    })
  }
   
}

async function deletepdct(req,res) {
    try{
        const {id} = req.params;
    const found = abc.find((item)=>item.id===id);
    if(found)
    {
        const ind = abc.indexOf(found);
        abc.splice(ind,1);
        return res.status(200).json({
            message : "Data deleted Successfully"
        })
    }
    else{
        return res.status(400).json({
            message:"Could not find data to Delete"
        })
    }
    } catch (err){
        return res.status(500).json({
            message : "Error Deleting Data"
        })
    }


}
module.exports = {getPdct,postpdct,patchpdct,putpdct,deletepdct}