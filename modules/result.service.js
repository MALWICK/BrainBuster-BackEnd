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
    return oneResult;
  }

  async addResult(studentName, emailAddress) {
    try {
      const newResult = await this.resultRepo.addResult({
        studentName,
        emailAddress,
      });

      return newResult;
    } catch (error) {
      return error;
    }
  }

  async updateResult(result, id) {
    await this.resultRepo.updateResult(result, id);

    const updatedResult = await this.resultRepo.getResultById(id);

    return updatedResult;
  }

  async deleteResult(id) {
    try {
      await this.resultRepo.deleteResult(id);
    } catch {
      throw new Error("COULD_NOT_DELETE_USER");
    }
  }
}

module.exports = ResultService;
