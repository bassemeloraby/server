import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  { tradeName: { type: String, required: true }, price: { type: Number } },
  { timestamps: true }
);


const Product = mongoose.model("Product", productSchema);

export default Product;