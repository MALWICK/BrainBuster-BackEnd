const UserService = require("../modules/user.service");

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  getAllUsers(req, res) {
    this.userService
      .getAllUsers()
      .then((user) => res.status(200).send(user))
      .catch((err) => res.status(500).send(err));
  }

  getOneUser(req, res) {
    this.userService
      .getOneUser(req.params.id)
      .then((user) => res.status(200).send(user))
      .catch((err) => res.status(500).send(err));
  }

  addUser(req, res) {
    const { fullName, emailAddress, password } = req.body;

    if (!(fullName && emailAddress && password)) {
      return res.status(406).send({ message: "Missing User Info" });
    }

    this.userService
      .addUser(fullName, emailAddress, password)
      .then((user) => res.status(201).send(user))
      .catch((err) => res.status(500).send(err));
  }

  updateUser(req, res) {
    this.userService
      .updateUser(req.body, req.params.id)
      .then((updatedUser) => res.status(202).send(updatedUser))
      .catch((err) => res.status(401).send(err));
  }

  deleteUser(req, res) {
    this.userService
      .deleteUser(req.params.id)
      .then(() => res.sendStatus(202))
      .catch((err) => res.status(500).send(err));
  }

  login(req, res) {
    const { emailAddress , password } = req.body;

    if (!(emailAddress && password)) {
      return res.status(406).send({ message: "Missing User Info" });
    }

    this.userService
      .login(emailAddress, password)
      .then((user) => res.status(201).send(user))
      .catch((err) => res.status(500).send(err));
  }
}

module.exports = UserController;
