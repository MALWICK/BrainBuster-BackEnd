const QuizzesRepository = require("../modules/quizzes.repo");

class QuizzesService {
  constructor() {
    this.quizRepo = new QuizzesRepository();
  }

  async getAllQuizzes() {
    const allQuizzes = await this.quizRepo.getAllQuizzes();
    return allQuizzes;
  }

  async getOneQuiz(id) {
    const oneQuiz = await this.quizRepo.getQuizById(id);
    return oneQuiz;
  }

  async addQuiz(quiz) {
    try {
      const newQuiz = await this.quizRepo.addQuiz(quiz);
      return newQuiz;
    } catch (error) {
      throw new Error("COULD NOT ADD QUIZ");
    }
  }

  async updateQuiz(quizToEdit, id) {
    const quiz = await this.quizRepo.getQuizById(id);

    if (!quiz) throw new Error("Quiz not found");

    await this.resultRepo.updateQuiz(quizToEdit, id);

    const updatedQuiz = await this.quizRepo.getQuizById(id);
    return updatedQuiz;
  }

  async deleteQuiz(id) {
    try {
      await this.quizRepo.deleteQuiz(id);
    } catch (error) {
        throw new Error("Couldn't delete the quiz")
    }
  }
}

module.exports= QuizzesService;