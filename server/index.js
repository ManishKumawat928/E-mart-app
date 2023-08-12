require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const connectToMongo = require("./db");
const cookieParser = require("cookie-parser");
const User = require("./models/user");
const bcrypt = require("bcrypt");

// database connection
connectToMongo();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      User.create({ name, email, password: hash })
        .then((user) => res.json("Success"))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign(
            { email: user.email, role: user.role },
            "jwt-secret-key",
            { expiresIn: "7d" }
          );
          // set cookie with the generated token and send it back to client side
          res.cookie("token", token);
          return res.json({ Status: "Success", role: "submit" });
        } else {
          return res.json("The password is incorrect");
        }
      });
    } else {
      return res.json("No record existed");
    }
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port no ${port}`);
});
