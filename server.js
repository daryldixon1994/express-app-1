// create a web server with express
const express = require("express");
const app = express();
const path = require("path");
const PORT = 5000 || process.env.PORT;

// buit in middleware
// global middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  //   end point
  res.sendFile(path.resolve("pages", "index.html"));
});

app.get("/about", (req, res) => {
  //   end point
  res.sendFile(path.resolve("pages", "about.html"));
});

app.get("/contact", (req, res) => {
  //   end point
  res.sendFile(path.resolve("pages", "contact.html"));
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on: http://localhost:${PORT}`);
});

// CRUD:
// HTTP methods : Create => post / Read=> get / Update =>put / Delete => delete

// ==================================

// Request : Path
// http://127.0.0.1:5000 => https://www.myserver.com/login
// https://www.myserver.com/users : Get
// https://www.myserver.com/users : Post
// https://www.myserver.com/users : Put
// https://www.myserver.com/users : Delete

// ==================================
// Path variable
// https://www.myserver.com/api/v1/n1/users/:id : Get

// ==================================
// Quey parameters
// https://www.myserver.com/users/:id/:name/:t?q=value : Get
// Quey parameters
// https://www.myserver.com/users?q=value : Get

// headers/body

// ======================================
// web application: SERVER SIDE RENDERING
