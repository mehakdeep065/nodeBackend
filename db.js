const mongoose = require('mongoose');

const mongoo_URL= 'mongodb+srv://mehaksingh065:Killer%2334@cluster0.ojr8y.mongodb.net/';

const connectDB= async()=>{
    try{
        await mongoose.connect(mongoo_URL);
        console.log('mongoDb connected');
    }
    catch(err){
        console.log("Error:",err.massage);
        process.exit(1)
    }
}

module.exports = connectDB;