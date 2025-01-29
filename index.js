const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

//middleware
app.use(cors());

//test route
app.get("/", (req, res) => {
  res.send("Hello World! for my first server application");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
