const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/", async function (req, res) {
  const user = await User.findAll();
  res.send(user);
});

router.post("/", async function (req, res) {
  const { fullName, eamilAdress, password } = req.body;
  const user = await User.create({
    fullName,
    eamilAdress,
    password,
  });
  res.send(user);
});

module.exports = router;
