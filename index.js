const express = require('express')
const connectDB= require('./db')
const userRouter = require('./router/user.router')
const productRouter =  require('./router/products.router')

const app = express()
const Port = 4000;

//middleware
app.use(express.json());  //imortant  middleware for json data

//route
app.use("/home",(req,res)=>{
    res.send("hello home");

})
// app.use('/api/users',userRouter);
// app.use('/api/users',userlogin);

// // products
app.use('/api/product',productRouter);


connectDB().then(()=>{
    app.listen(Port, ()=>{
        console.log(`Server is running on ${Port}`)
    })
});