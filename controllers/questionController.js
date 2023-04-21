const Question = require("../models/questions");

const getAllQuestions = async (req, res, next) => {
  const allQuestions = await Question.findAll();
  res.send(allQuestions);
};

const createOneQuestion = async (req, res, next) => {
  const { question, answer, category, quizName, adminId } = req.body;

  if (!question || !answer || !category || !quizName) {
    res.send("{Missing Question Information}");
    return;
  }

  const newQuestion = await Question.create({
    question,
    answer,
    category,
    quizName,
    adminId,
  });
  res.send(newQuestion);
};

const getOneQuestion = async (req, res, next) => {
  const question = await Question.findAll({
    where: {
      id: +req.params.id,
    },
  });
  if (!question) {
    res.send(`QusetionID ${req.params.id} does not Exits`);
    return;
  }

  res.send(question);
};

const putOneQuestion = async (req, res, next) => {
  const [question] = await Question.findAll({
    // this to check if the category even exits
    where: {
      id: +req.params.id,
    },
  });
  if (!question) {
    res.send(`CategoryID ${req.params.id} does not Exits`);
    return;
  }

  await Question.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  const overWrittenQuestion = await Category.findAll({
    where: { id: req.params.id },
  });
  res.send(overWrittenQuestion);
};

const patchOneQuestion = async (req, res, next) => {
  const [question] = await Question.findAll({
    where: {
      id: +req.params.id,
    },
  });
  if (!question) {
    res.send(`CategoryID ${req.params.id} does not Exits`);
    return;
  }

  await Question.update(req.body, { where: { id: req.params.id } });
  updatedQuestion = await Question.findAll({ where: { id: req.params.id } });
  res.send(updatedQuestion);
};


const deleteOneQuestion = async (req, res, next) => {
    await Question.destroy({
      where: { id: +req.params.id }
    });
    res.send(`QuestionId ${req.params.id} dropped!`);
  }

  module.exports = {
    getAllQuestions,
    createOneQuestion,
    getOneQuestion,
    putOneQuestion,
    patchOneQuestion,
    deleteOneQuestion
  }