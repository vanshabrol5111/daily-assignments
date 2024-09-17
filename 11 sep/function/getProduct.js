const Product = require("../products/product");

async function getProducts(req,res) {

try{
    const {id} = req.params;
    if(id)
    {
        const product = await Product.findById({_id:id});
        return res.status(200).json({
            message:"Product fetched successfully",
            data : product
        })
    }
    
    const products = await Product.find()
    return res.status(200).json({
        message:"Product fetched successfully",
        data : products
    })
}
catch (err){
    return res.status(500).json({
        message: "Error Fetching Product Data",
        error : err
    })
}

}

module.exports = {getProducts}