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
    const {
      question,
      option1,
      option2,
      option3,
      option4,
      answer,
      quizTimer,
      quizName,
      quizImageUrl,
      UserId,
    } = req.body;

    this.quizzesService
      .addQuiz(
        question,
        option1,
        option2,
        option3,
        option4,
        answer,
        quizTimer,
        quizName,
        quizImageUrl,
        UserId
      )
      .then((user) => res.status(201).send(user))
      .catch((err) => res.status(500).send(err));
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
