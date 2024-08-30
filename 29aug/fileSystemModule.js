const fs = require("fs");
const listFiles =(path)=>{

 fs.readdir(path,function(err,data){
    if(err)
    {
        console.log("\n\nERROR Reading Requested Directory",err);
    }
    else
    {
        console.log("Directory Read Successfully \nFILE DATA :-",data);  
    }
});
}



const createDirectory = (logic)=>{ 
 fs.mkdir(logic,function(err){
    if(err)
    {
        console.log(`\nError Creating Directory\n`,err)
    }
    else
    {
        console.log(`Directory Successfully Created  with name ${logic}`)
    }
 })
}



const ReadFileContent = (path)=>{

    fs.readFile(path,"utf8",function(err,data){
        if(err)
                {
                    console.log(`\n\nError Reading Data from ${path}\n` ,err)
                }
                else
                {
                    console.log("Data Contents Read Successfully : ",data); 
                }
    })
   
}
const WritetoFile = (path,data)=>{
   fs.open(path,'w',function(err,filedata){
    if(err)
    {
        console.log("FILE NOT FOUND",err)
    }
    else{
        fs.write(filedata,new Buffer.from(data),function(err){

            if(err)
                    {
                        console.log("Error Writing in file due to \n\n",err)
                    }
                    else
                    {
                        console.log(` ${data} successfully written to file ${path} `);
                       
                    }
    
        })
    }
    
   })


}

module.exports = {listFiles,createDirectory,ReadFileContent,WritetoFile}