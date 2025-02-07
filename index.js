import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();


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
  console.log(`Example app listening on port ${PORT}`.yellow.bold);
});
