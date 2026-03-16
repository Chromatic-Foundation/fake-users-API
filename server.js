const express = require("express");
const app = express();

const firstNames = [
  "John","Emma","Lucas","Olivia","Noah","Ava","Liam","Sophia"
];

const lastNames = [
  "Smith","Johnson","Brown","Taylor","Anderson","White"
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateUser() {
  const first = random(firstNames);
  const last = random(lastNames);
  const username = (first + last + Math.floor(Math.random()*100)).toLowerCase();

  return {
    name: first + " " + last,
    username: username,
    email: username + "@example.com"
  };
}

app.get("/", (req,res)=>{
  res.json({
    name: "Project Lemon Fake User API",
    endpoint: "/api/fake-user"
  });
});

app.get("/api/fake-user", (req,res)=>{
  res.json(generateUser());
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log("API running on port " + PORT);
});
