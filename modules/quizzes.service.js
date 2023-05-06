const QuizzesRepository = require("./quizzes.repo");

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

  async addQuiz(
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
  ) {
    try {
      const newQuiz = await this.quizRepo.addQuiz({
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
      });
      return newQuiz;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateQuiz(quiz, id) {
    await this.quizRepo.updateQuiz(quiz, id);

    const updatedQuiz = await this.quizRepo.getQuizById(id);

    return updatedQuiz;
  }

  async deleteQuiz(id) {
    try {
      await this.quizRepo.deleteQuiz(id);
    } catch (error) {
      throw new Error("Couldn't delete the quiz");
    }
  }
}

module.exports = QuizzesService;
