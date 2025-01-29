video 1:how to create a server?
--------------------------------
#create a node project
npm init -y

#open express website
https://expressjs.com/

==>
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! for my first server application");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
==>

#download express.js
$ npm install express --save

#start server working
node index.js

#open web prowser
http://localhost:3000/
======================================

video 2: how to make a server self updated?
-------------------------------------------

#change "scripts"
"start": "node index.js",
npm run start

#npm website
https://www.npmjs.com/ 

npm install --save-dev nodemon

#change "scripts"
add
"dev": "nodemon index.js"

npm run dev

======================================

video 3: git and github repositories
-------------------------------------------
https://github.com/

create account

create .gitignore file

node_modules

======================================

video 4: cors
-------------------------------------------
https://www.npmjs.com/package/cors

npm i cors

const cors = require('cors')

app.use(cors())
======================================

video 5: convert CommonJS module to an ES module
-------------------------------------------
>package.json
"type": "module",

>index.js
import express from 'express';
import cors from 'cors';


======================================

video 6: routes
-------------------------------------------
-create folder for routes
-create file for product routes (productRoutes.js)
-
import express from 'express';
const router = express.Router();

// Search route should be before :id route to avoid conflict

router.get('/search', (req, res) => {
  res.send("Search product")
});

export {
  searchProducts,
}; 

> index.js
import productRoutes from './routes/productRoutes.js';
