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
      .getOneResult(req.body.emailAddress)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err));
  }

  addResult(req, res) {
    const { studentName, emailAddress } = req.body;

    if (!studentName || !emailAddress) {
      res.send("{ Missing Result Info }");
      return;
    }

    this.resultService
      .addResult(studentName, emailAddress)
      .then((result) => res.status(201).send(result))
      .catch((err) => res.status(500).send(err));
  }

  updateResult(req, res) {
    this.resultService
      .updateResult(req.body, req.body.emailAddress)
      .then((updatedResult) => res.status(202).send(updatedResult))
      .catch((err) => res.status(403).send(req.body.emailAddress));
  }

  deleteResult(req, res) {
    this.resultService
      .deleteResult(req.params.id)
      .then(() => res.sendStatus(202))
      .catch((err) => res.status(500).send(err));
  }
}

module.exports = ResultController;
