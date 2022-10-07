const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    { name: "bob", age: 34 },
    { name: "bob2", age: 24 },
    { name: "bob3", age: 44 },
  ];
  res.json(users);
});

app.listen(5000, () => {
  console.log("server is running with express");
});
