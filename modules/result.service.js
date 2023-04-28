const ResultRepository = require("./result.repo");

class ResultService {
  constructor() {
    this.resultRepo = new ResultRepository();
  }

  async getAllResults() {
    const allResults = await this.resultRepo.getAllResults();
    return allResults;
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
      });
      

      return newResult;
    } catch (error) {
      throw new Error("COULD_NOT_ADD__RESULT__ERROR");
    }
  }

  async updateResult(result, id) {
    const result = await this.getResultById(id);

    if (!result) throw new Error("RESULT__DOES_NOT_EXIST");

     await this.resultRepo.updateResult(result, id);

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
