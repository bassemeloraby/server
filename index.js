import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";

const app = express();

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/products", productRoutes);

//test route
app.get("/", (req, res) => {
  res.send("Hello World! for my first server application");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
