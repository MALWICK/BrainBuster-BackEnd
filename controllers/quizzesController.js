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
      .then((quiz) => res.status(200).send(quiz))
      .catch((err) => res.status(500).send(err));
  }

  addQuiz(req, res) {
    const { question, answer, quizLink, quizName, adminId } = req.body;

    if (!question || !answer || !quizName || !adminId || !quizLink) {
      return res.status(401).send({ message: "Missing Quiz Info" });
    }

    this.quizzesService
      .addQuiz({
        question,
        answer,
        quizLink,
        quizName,
        adminId,
      })
      .then((quiz) => response.status(201).send(quiz))
      .catch((err) => res.status(500).send(err));
  }

  updateQuiz(req, res) {
    this.quizzesService
      .updateQuiz(req.body, req.params.id)
      .then((updatedQuiz) => res.status(202).send(updatedQuiz))
      .catch((error) => res.status(401).send(error));
  }

  deleteQuiz(req, res) {
    this.quizzesService
      .deleteQuiz(req.params.id)
      .then(() => res.status(200))
      .catch((err) => res.status(500).send(err));
  }
}

module.exports = QuizController;
