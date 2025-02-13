import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

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
export { createProduct, getProducts };
