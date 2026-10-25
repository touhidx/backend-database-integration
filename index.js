import express from "express";

import cors from "cors";
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hellow world from express");
});

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "touhid", email: "e@email.com" },
  { id: 2, name: "touhidz", email: "b@email.com" },
];

app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/users", (req, res) => {
  res.send(users);
});
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send({ success: true, message: "user added successfully" });
});

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
