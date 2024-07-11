const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const { title } = require('process');


const products = [];

// /admin/add-product => GET
router.get('/add-product',(req,res,next)=>{
    res.render('add-product',{pageTitle: "Add Product"})
  
});

// /admin/add-product => POST
router.post('/add-product',(req,res,next)=>{
    console.log(req.body.title);
    products.push({
        title :req.body,
    });
    res.redirect('/');
   
});




exports.routes = router;
exports.products = products;