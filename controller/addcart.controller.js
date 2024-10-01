const addcart = require('../models/add_to_card.model');
const { findOne } = require('../models/user.models');

const add_to_card = async(req,res)=>{
    try{
        const {product,quantity=1} = req.body;
        const user_id = req._id;
        const product_name = product.product_name;

        //find cart
        const existcart = await findOne()

        
        
    } catch (error) {
        res.status(200).send("failed to cart")
    }
 
}
