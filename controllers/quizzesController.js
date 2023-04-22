const Quiz = require("../models/quiz");

const addQuiz = async (req, res) => {
  const { question, answer, category, quizName, adminId } = req.body;

  if (!question || !answer || !category || !quizName) {
    res.send("{Missing Question Information}");
    return;
  }

  const newQuiz = await Quiz.create({
    question,
    answer,
    category,
    quizName,
    adminId,
  });
  res.status(200).send(newQuiz);
};

const getAllQuizzes = async (req, res) => {
  const allQuizzes = await Quiz.findAll();
  res.status(200).send(allQuizzes);
};

const getOneQuiz = async (req, res) => {
  const quiz = await Quiz.findByPk(req.params.id);
  if (!quiz) {
    res.send(`QuizID ${req.params.id} does not Exits`);
    return;
  }
  res.status(200).send(quiz);
};

const updateQuiz = async (req, res) => {
  const { question, answer, category, quizName } = req.body;
  /*  if (!question) {
    res.send(`CategoryID ${req.params.id} does not Exits`);
    return;
  } */

  await Quiz.update(
    { question, answer, category, quizName },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  const quiz = await Quiz.findByPk(req.params.id);
  res.status(200).send(quiz);
};

const deleteQuiz = async (req, res) => {
  await Quiz.destroy({
    where: { id: req.params.id },
  });
  res.status(200).send("Quiz dropped!");
};

module.exports = {
  addQuiz,
  getAllQuizzes,
  getOneQuiz,
  updateQuiz,
  deleteQuiz,
};
