import {
  createProduct,
  getProducts,
} from "../controllers/productController.js";

import express from "express";

const router = express.Router();

router.route("/").post(createProduct).get(getProducts);

export default router;