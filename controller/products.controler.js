const product = require('../models/products.model')

const products_add = async(req,res)=>{
    try{
    const {product_name,product_price,product_quantity,product_disc}=req.body;
    const product_exist=await product.findOne({product_name:product_name});
  

    if(product_exist){
        res.send('product is existed');
    }
    const newProduct= new product({
        product_name,
        product_price,
        product_quantity,
        product_disc,
    })
    const responceData = await newProduct.save();
    res.status(200).json({message:responceData.toObject()})
}
catch(err){
    console.log("error in controller:",err);
}
};
//product search
const products_sea = async (req,res)=>{
    try{
     
        const search =  await product.findOne(req.query); //req.query use for get query from frontend
        if(search){
        console.log(req.query);
        res.status(200).json({search_result:search.toObject()}) //use toObject() for convert mongoose_doc to obj
        }
        else{
        res.status(400).send("product not found");
        }
   
    }
    catch(err){
        consoler.log(`error in product controler ${err}`);
    }
}


module.exports = {products_add,products_sea};
