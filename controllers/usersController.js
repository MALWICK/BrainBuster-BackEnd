const User = require("../models/users");
const bcrypt = require("bcrypt");
const { signToken } = require("../services/jwt");

const addUser = async (req, res) => {
  const { fullName, emailAddress, password } = req.body;
  if (!fullName || !emailAddress || !password) {
    res.send("{Missing User Info }");
    return;
  }
  const duplicateUser = await User.findOne({
    where: {
      emailAdress: emailAddress,
    },
  });

  if (duplicateUser)
    return res.status(401).send(`user_email: ${emailAddress} already exist`);

  bcrypt.genSalt(5, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      if (err) res.status(500).send(err);
      else {
        const user = await User.create({
          firstName,
          lastName,
          emailAddress,
          password: hash,
        });
        res.status(200).send(user);
      }
    });
  });
};

const getAllUsers = async (req, res) => {
  const allUsers = await User.findAll();
  res.status(200).send(allUsers);
};

const getOneUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);

  if (!user) {
    res.send(`userID ${req.params.id} does not Exits`);
    return;
  }

  res.status(200).send(user);

  /* user = user.dataValues;

  delete user.password;
  delete user.deletedAt;
  delete user.updatedAt; */
};

const updateUser = async (req, res) => {
  const { fullName, emailAddress, password } = req.body;
  await User.update(
    { fullName, emailAddress, password },
    { where: { id: req.params.id } }
  );
  const user = await User.findByPk(req.params.id);
  res.status(200).send(user);
};

const deleteUser = async (req, res) => {
  await User.destroy({
    where: { id: req.params.id },
  });
  res.send("User dropped!");
};

const login = async (req, res) => {
  try {
    const { emailAddress, password } = req.body;

    const user = await User.findOne({ where: { emailAddress: emailAddress } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = signToken({ user_id: user.id });
      res.status(200).send({ user, token });
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
};

const getCurrentUser = (req, res) => {
  res.send(req.user);
};

module.exports = {
  addUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  login,
  getCurrentUser,
};
