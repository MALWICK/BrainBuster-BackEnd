const User = require("../models/users");

class UserRepository {
  getAllUser() {
    return User.findAll();
  }

  getUserById(id) {
    return User.findByPk(id);
  }

  getUserByEmail(emailAddress) {
    return User.findOne({ wher: { emailAddress } });
  }

  addUser(user) {
    return User.create(user);
  }

  updateUser(user, id) {
    return User.update(user, { where: { id } });
  }

  deleteUser(id) {
    return User.destroy({ where: { id } });
  }
}

module.exports = UserRepository;