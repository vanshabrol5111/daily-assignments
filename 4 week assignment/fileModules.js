const fs = require("fs").promises;

async function Readfile(path){
   
 try{

    const data =  await fs.readFile(path);
    let response = data;
    
        return JSON.parse(response);
    
   
 }catch (err){
    console.log("Error Reading File",err)
 }

}

async function UpdateFile(path,id,name) {
    try{
        const data =  await fs.readFile(path);
    let data1 = JSON.parse(data)
   data1.map((item)=>{
    if(item.id===id)
    {
        item.name =name;
    }
    
    })
    await fs.writeFile(path,JSON.stringify(data1)); 
    return data1;
    } catch (err){
        console.log("Error Updating File")
    }

}

async function WriteFile(path,id,name) {
    try{
        const data =  await fs.readFile(path);
    let data1 = JSON.parse(data)
  
    const obj = {
        id:id,
        name:name
    }
   data1.push(obj)
   await fs.writeFile(path,JSON.stringify(data1)); 

    return data1;
    } catch (err){
        console.log("Error Adding Entry")
    }

}

async function deleteRecord(path,id) {
   try{
    const data =  await fs.readFile(path);
    let data1 = JSON.parse(data)
  
   
   const found = data1.find((item)=>item.id===id);
   console.log(found);
   
   if(found){
    data1.splice(data1.indexOf(found),1);
    await fs.writeFile(path,JSON.stringify(data1)); 

    return data1;
   }
   else{
 return null
   }
   


   } catch (err){
    console.log("Error Deleting Record")
   }

}

module.exports = {Readfile,UpdateFile,WriteFile,deleteRecord}