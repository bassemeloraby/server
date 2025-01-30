import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const port = 3000;

//middleware
app.use(cors());

// Routes
app.use('/api/products', productRoutes);

//test route
app.get("/", (req, res) => {
  res.send("Hello World! for my first server application");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
