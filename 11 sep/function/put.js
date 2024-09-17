const Product = require("../products/product");

async function updateProduct(req,res) {
    try{
        const {id} = req.params;
        const {name,description,inStock} = req.body

        if(!name || !description || typeof(inStock)!=="boolean")
        {
            return res.status(400).json({
                message:"Please Fil all details"
            })
        }

       const productData =  await Product.findById({_id:id})
      
    if(!productData)
    {
        return res.json({
            message:"Could Not find Product"
        })
    }

    productData.name = name;
    productData.description = description;
    productData.inStock = inStock;

    productData.save();

        return res.status(200).json({
            message: "Product updated Successfully",
            data : productData
        })
       }
       catch (err)
       {
        return res.status(500).json({
            message:"Error updating  Poduct",
            error : err
        })
       }
}

module.exports = {updateProduct}