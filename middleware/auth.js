const jwt = require("jsonwebtoken");
const User = require("../models/users");

const authToken = async (req, res, next) => {
  const authorization = req.get("Authorization");
  const token = authorization?.split(" ").pop();
  console.log(`user token: ${token}`);

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const { data } = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    const user = await User.findByPk(data.user_id);
    if (!user) return res.status(401);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).send(`Invalid Token: ${token}`);
  }
};

module.exports = { authToken };
