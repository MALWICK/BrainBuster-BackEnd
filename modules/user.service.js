const UserRepository = require("./user.repo");
const bcrypt = require("bcrypt");
const { signToken } = require("../services/jwt");

class UserService {
  constructor() {
    this.userRepo = new UserRepository();
  }

  async getAllUsers() {
    const allUsers = await this.userRepo.getAllUser();
    return allUsers;
  }

  async getOneUser(id) {
    const oneUser = await this.userRepo.getUserById(id);
    return oneUser;
  }

  async addUser(fullName, emailAddress, password) {
    try {
      const hash = await bcrypt.hash(password, +process.env.SALT_ROUNDS);

      const newUser = await this.userRepo.addUser({
        fullName,
        emailAddress,
        password: hash,
      });

      return newUser;
    } catch (err) {
      throw new Error("COULD_NOT_REGISTER_USER");
    }
  }

  async updateUser(user, id) {
 
    await this.userRepo.updateUser(user, id);

    const updatedUser = await this.userRepo.getUserById(id);

    return updatedUser;
  }

  async deleteUser(id) {
    try {
      await this.userRepo.deleteUser(id);
    } catch {
      throw new Error("COULD_NOT_DELETE_USER");
    }
  }

  async login(emailAddress, password) {
    try {
      const user = await this.userRepo.getUserByEmail(emailAddress);

      const loginInfo = user && (await bcrypt.compare(password, user.password));

      if (loginInfo) {
        const token = signToken({ user_id: user.id });
        return token;
      }
      if (!loginInfo) {
        return "Email or Password incorrect";
      }
    } catch (err) {
      throw new Error("COULD_NOT_LOGIN_USER");
    }
  }
}

module.exports = UserService;
