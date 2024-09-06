function postValidation(req,res,next){
    const {name,description,price,instock} = req.body
    if(!name || !description || !price || price<=0   || !instock)
    {
        return res.status(400).json({
            message : "Add All Details Properly"+`${price<=0 ? " And Price Cannot be negative":""}`
        })
    }
    next();
    }
    
    function putValidation(req,res,next){
        const {name,description,price,instock} = req.body
        if(!name || !description ||  !price || price<=0  || typeof(instock)!=="boolean")
        {
            return res.status(400).json({
                message : "Add All Details in proper format"+`${price<=0 ? " And Price Cannot be negative":""}`
            })
        }
        next();
    
    }
    
    function patchValidation(req,res,next){
        const {instock} = req.body;
        if(typeof(instock)!=="boolean")
        {
            return res.status(400).json({
                message : "Please Add instock status Properly !!"
            })
        }
        
       
        next();
        
    }
    
    
        
    
    
    module.exports = {postValidation,putValidation,patchValidation}