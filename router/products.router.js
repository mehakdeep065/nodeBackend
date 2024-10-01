const express = require('express')

const productRouter = express.Router();
const {products_add,products_sea} = require('../controller/products.controler')

productRouter.post('/add',products_add)
productRouter.get('/get',products_sea)
productRouter.get()


module.exports = productRouter;