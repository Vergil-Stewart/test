const Product = require('../models/Product.js');

exports.getProduct = async (req, res) => {
  try {
    const {pageNum, category} = req.query;
    const products  = await Product.find();
    if(category !== ""){
      newProducts = products.filter((item) => item.category === category).filter((item, index) => (index >= (pageNum) * 5 && index < (pageNum + 1) * 5));
    }
    else if(pageNum){
      console.log("getting Products", req.query);
      newProducts = products.filter((item, index) => (index >= (pageNum) * 5 && index < (pageNum + 1) * 5));
      // console.log(newProducts);
    } else {
      console.log("getProducts...")
      newProducts = products;
    }
      res.status(200).json(newProducts);
  } catch(err){
    console.error(err.message);
  }
};

exports.createProduct = async (req, res) => {
  try{
    const {name, price, category} = req.body;

    console.log("Creating a Product -> ", req.body);
    const newProduct = new Product({name, price, category});
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err){
    console.error(err.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json(id);
  } catch (err) {
    console.error(err.message);
  }
};