import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

const createProduct = asyncHandler(async (req, res) => {
  const productData = { ...req.body };
  if (productData.tradeName) {
    const product = await Product.create(productData);
    res.status(200).json(product);
  } else {
    res.status(400).json({ message: "Trade name is required" });
  }
});

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
})

const getProductById = asyncHandler(async(req, res) => {
  const { id } = req.params;
  // Check if ID is a valid MongoDB ObjectId
   if (!mongoose.Types.ObjectId.isValid(id)){
     return res.status(400).json({ message: "Invalid product ID" });
   }

   const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
});

export { createProduct, getProducts, getProductById };
