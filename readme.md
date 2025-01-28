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