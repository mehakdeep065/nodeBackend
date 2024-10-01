const product = require('../models/products.model');


const product_add = async (req,res)=>{
    try {
        const {product_name} = req.body;
        const product_exist = product.findOne({product_name:product_name})
        if(product_exist){
            console.log("product is already exist");
        }
        else{
            const newProduct = new product({
                product_name,
            })
            const productrespose = await newProduct.save();
            res.status(200).json({message:productrespose.toObject()})
        }
    } catch (error) {
        res.status(400).send("invalude error in product test")
    }
}