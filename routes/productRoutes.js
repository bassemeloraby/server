import {
  createProduct,
  getProducts,
  getProductById,
} from "../controllers/productController.js";

import express from "express";

const router = express.Router();

router.route("/").post(createProduct).get(getProducts);

router.route("/:id").get(getProductById);


export default router;