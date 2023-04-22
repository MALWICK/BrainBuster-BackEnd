const jwt = require("jsonwebtoken");

function signToken(data) {
  return jwt.sign(
    {
      data,
    },
    process.env.JWT_TOKEN_SECRET,
    { expiresIn: "24h" }
  );
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_TOKEN_SECRET);
}

module.exports = { signToken, verifyToken };
