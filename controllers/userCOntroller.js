const User = require("../models/user");
const bcrypt = require("bcrypt");

const getAllUser = async (req, res, next) => {
    const allUsers = await User.findAll();
    res.send(allUsers)
}
