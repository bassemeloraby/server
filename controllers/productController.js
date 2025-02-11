import Product from "../models/productModel.js";

const createProduct = async (req, res) => {
const productData = { ...req.body };
const product = await Product.create(productData);

  res.status(200).json(product);
};

export { createProduct };
