const Result = require("../models/results");

class ResultRepository {
  getAllResults() {
    return Result.findAll();
  }

  getResultById(emailAddress) {
    return User.findOne({ where: { emailAddress: emailAddress } })
  }

  addResult(result) {
    return Result.create(result);
  }

  updateResult(result, emailAddress) {
    return Result.update(result, { where: { emailAddress: emailAddress } });
  }

  deleteResult(id) {
    return Result.destroy({ where: { id } });
  }
}

module.exports = ResultRepository;
