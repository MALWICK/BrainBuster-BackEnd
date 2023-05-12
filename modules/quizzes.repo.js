const Quizzes = require("../models/quizzes");

class QuizzesRepository {
  getAllQuizzes(userId, quizName) {
    return Quizzes.findAll({ where: { UserId: userId, quizName: quizName } });
  }

  getQuizById(id) {
    return Quizzes.findByPk(id);
  }

  addQuiz(quiz) {
    return Quizzes.create(quiz);
  }

  updateQuiz(quiz, id) {
    return Quizzes.update(quiz, { where: { id } });
  }

  deleteQuiz(id) {
    return Quizzes.destroy({ where: { id } });
  }
}

module.exports = QuizzesRepository;
