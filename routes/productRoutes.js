import { createProduct } from "../controllers/productController.js";

import express from "express";

const router = express.Router();

router.route("/").post(createProduct);

export default router;