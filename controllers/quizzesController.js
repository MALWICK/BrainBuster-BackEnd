const QuizzesService = require("../modules/quizzes.service");

class QuizController {
  constructor() {
    this.quizzesService = new QuizzesService();
  }

  getAllQuizzes(req, res) {
    this.quizzesService
      .getAllQuizzes()
      .then((quiz) => res.status(200).send(quiz))
      .catch((err) => res.status(500).send(err));
  }

  getOneQuiz(req, res) {
    this.quizzesService
      .getOneQuiz(req.params.id)
      .then((quiz) => res.status(200).send(quiz))
      .catch((err) => res.status(500).send(err));
  }

  addQuiz(req, res) {
    const { question, answer, quizLink, category, quizName, UserId } = req.body;

    if (
      !question ||
      !answer ||
      !quizLink ||
      !category ||
      !quizName ||
      !UserId
    ) {
      return res.status(401).send({ message: "Missing Quiz Info" });
    }

    this.quizzesService
      .addQuiz(question, answer, quizLink, category, quizName, UserId)
      .then((quiz) => res.status(201).send(quiz))
      .catch((err) => res.status(500).send(err));
    console.log(question, answer, quizLink, category, quizName, UserId);
  }

  updateQuiz(req, res) {
    this.quizzesService
      .updateQuiz(req.body, req.params.id)
      .then((updatedQuiz) => res.status(202).send(updatedQuiz))
      .catch((err) => res.status(403).send("id does not exist"));
  }

  deleteQuiz(req, res) {
    this.quizzesService
      .deleteQuiz(req.params.id)
      .then(() => res.sendStatus(202))
      .catch((err) => res.status(500).send(err));
  }
}

module.exports = QuizController;
