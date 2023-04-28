const ResultService = require("../modules/result.service");

class ResultController {
  constructor() {
    this.resultService = new ResultService();
  }

  getAllResults(req, res) {
    this.resultService
      .getAllResults()
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err));
  }

  getOneResult(req, res) {
    this.resultService
      .getOneResult(req.params.id)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err));
  }

  addResult(req, res) {
    const { studentName, attemps, earnPoints, quizResult, quizName } = req.body;

    if (!studentName || !attemps || !quizResult || !quizName || !earnPoints) {
      res.send("{ Missing Result Info }");
      return;
    }

    this.resultService
      .addResult(
        studentName,
        attemps,
        earnPoints,
        quizResult,
        quizName,
        questionId
      )
      .then((result) => res.status(201).send(result))
      .catch((err) => res.status(500).send(err));
  }

  updateResult(req, res) {
    this.resultService
      .updateResult(req.body, req.params.id)
      .then((updatedResult) => res.status(202).send(updatedResult))
      .catch((error) => res.status(401).send(err));
  }

  deleteResult(req, res) {
    this.resultService
      .deleteResult(req.params.id)
      .then(() => res.status(200))
      .catch((err) => res.status(500).send(err));
  }
}

module.exports = ResultController;
