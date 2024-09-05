const { abc } = require("./data");
class todo {
    constructor(id, title, description, completed) {
        this.id = id
            this.title = title
            this.description = description
            this.completed = completed
    }
    addtodo(data) {
        abc.push(data);
        return true;
    }
}
async function gettodo(req, res) {
    try {
        const { id } = req.params;
        console.log(abc)
        if (id) {
            const data = abc.find((item)=>item.id === id);
            
          
            if (data) {
                return res.status(200).json({
                    message: "data found succesful",
                    data: data,
                });
            } else {
                return res.status(400).json({
                    message: "data  not found ",
                });
            }
        } else {
            return res.status(200).json({
                data: abc,
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "data not fetched ",
        });
    }
}
async function posttodo(req, res) {
    try {
        const { id, title, description, completed } = req.body;
        const newtodo = new todo(id, title, description, completed);
        const response = new todo.addtodo(newtodo);
        if (response) {
            return res.status(200).json({
                message: "post is sucessful",
                data: abc,
            });
        } else {
            return res.status(500).json({
                message: "error in posting",
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "error in posting",
        });
    }
}
async function patchtodo(req,res) {
    try{
        const {id} = req.params
    const {completed} = req.body;
    const data = abc.find((item)=>item.id===id);
  if(data)
  {
    data.completed = completed;
    return res.status(200).json({
        message:" updated succesfully"
    })
  }
  else{
    return res.status(400).json({
        message : "Could Not find Data"
    })
  }
    } catch (err){
        return res.status(500).json({
            message:"Error in updating"
        })
    }
}
async function puttodo(req,res) {
    try{
      const {id} = req.params
      const {title,description,completed} = req.body;
    
      const data =  abc.find((item)=>item.id===id);
     if(data)
     {
       data.id = id;
   data.title = title;
   data.description = description;
   data.completed = completed;
   
   return res.status(200).json({
       message:"Datat Updated Successfully",
      })
     }
   else{
       return res.status(400).json({
           message:"Could not find id",
          })
   }
   
    } catch (err){
      return res.status(500).json({
          message:"Error Updating Data"
      })
    }
     
  }
  async function deletetodo(req,res) {
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
module.exports ={gettodo,posttodo,patchtodo,puttodo,deletetodo}
  