const Product = require("../products/product")

async function addProduct(req,res) {

   try{
    const{name,description,price,inStock} = req.body;
   

    if(!name || !description || !price || typeof(inStock)!=="boolean")
    {
        return res.json({
            message:"Please Fll All details"
        })
    }

    const newProduct = await Product.create({
        name:name,
        description:description,
        price:price,
        inStock:inStock
    })
  
    res.status(200).json({
        message:"Product Added Successfully",
        productData : newProduct
    })
   }
   catch (err){
    res.status(500).json({
        message : "Error Adding new Product"
    })
   }
}

module.exports = {addProduct}