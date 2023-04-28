const Result = require("../models/results");

class ResultRepository {
  getAllResults() {
    return Result.findAll();
  }

  getResultById(id) {
    return Result.findByPk(id);
  }

  addResult(result) {
    return Result.create(result);
  }

  updateResult(result, id) {
    return Result.update(result, { where: { id } });
  }

  deleteResult(id) {
    return Result.destroy({ where: { id } });
  }
}

module.exports = ResultRepository;