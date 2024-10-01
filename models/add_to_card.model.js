const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    user_id:{
        type:String,
        required:true,

    },
    // product_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"product",
    //     required:true,
    // }
    products:{
        type:Array,
        default:[]
    }
  
    
},{timestamps:true})

const addcart = mongoose.model("addcart",cartSchema);
model.export = addcart;