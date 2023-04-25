const ResultRepository = require("../modules/result.repo");

class ResultService {
  constructor() {
    this.resultRepo = new ResultRepository();
  }

  async getAllResults() {
    const allResults = await this.resultRepo.getAllResults();
    return allResults;
  }

  async getResultById(id) {
    const aResult = await this.resultRepo.getResultById(id);
  }

  async getOneResult(id) {
    const oneResult = await this.resultRepo.getResultById(id);
    return oneUser;
  }

  async addResult(result) {
    try {
      const newResult = await this.resultRepo.addResult({
        studentName,
        attemps,
        earnPoints,
        quizResult,
        quizName,
        questionId,
      });
      

      return newResult;
    } catch (error) {
      throw new Error("COULD_NOT_ADD__RESULT__ERROR");
    }
  }

  async updateResult(result, id) {
    const result = await this.getResultById(id);

    if (!result) throw new Error("RESULT__DOES_NOT_EXIST");

    const updatedResult = await this.resultRepo.getResultById(id);

    return updatedResult;
  }

  async deleteResult(id) {
    try {
      await this.resultRepo.deleteResult(id);
    } catch (error) {
      throw new Error("COULD_NOT_DELETE_Result");
    }
  }
}

module.exports = ResultService;
