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

video 6: controllers and routes
-------------------------------------------

-create folder for controllers
-create file for product controllers (productController.js)

-create folder for routes
-create file for product routes (productRoutes.js)
-------------------
>> productController.js
const createProduct = (req, res) => {
  res.send("create product")
}
export {
  createProduct,
}; 
---------------------
>> productRoutes.js

import express from 'express';


import {
  createProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').post(createProduct);

export default router;
---------------

>> index.js

import productRoutes from './routes/productRoutes.js';


// Routes
app.use('/api/products', productRoutes);

========================================
video 7 : postman
-------------------
-create acount postman 
https://www.postman.com/


http://localhost:3000/api/products
========================================
video 8 : json
-------------------
https://www.w3schools.com/js/js_json_intro.asp

>> index.js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

>> productController.js

 res.status(200).json({tradeName :"hair shampoo", price : 20});