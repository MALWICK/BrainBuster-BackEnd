const Quizzes = require("../models/quizzes");

class QuizzesRepository {
  getAllQuizzes() {
    return Quizzes.findAll();
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
    return Quizzes.destroy({where: { id } });
  }
}

module.exports =  QuizzesRepository ;
