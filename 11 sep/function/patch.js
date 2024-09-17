const Product = require("../products/product");

async function updateProductStatus(req,res) {
    try{
        const {id} = req.params;
        const {inStock} = req.body
        if(typeof(inStock)!=="boolean")
        {
            return res.status("Please Provide inStock Status")
        }
       const productData =  await Product.findById({_id:id})
    if(!productData)
    {
        return res.json({
            message:"Could Not find Product"
        })
    }

    productData.inStock = inStock;

    productData.save();

        return res.status(200).json({
            message: " instock status updated Successfully",
            data : productData
        })
       }
       catch (err)
       {
        return res.status(500).json({
            message:"Error updating instock status Poduct",
            error : err
        })
       }
}

module.exports = {updateProductStatus}
