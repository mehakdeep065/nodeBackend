const mongoose = require('mongoose');
 
const product_schema =  new mongoose.Schema({

    product_id:{
        type:Number,
        unique:true
    },
    product_name:{
        type:String,
        required:true,
        trim:true
    },
  
    product_price:{
        type:Number,
        required:true,
        trim:true
    },
    product_quantity:{
        type:Number,
        required:true,
        trim:true
    },
    product_disc:{
        type:String,
        required:true,
        trim:true
    }   

},
{timestamps:true}
)
const products = new mongoose.model('products',product_schema);

module.exports = products;