const Result = require("../models/results");

const addResult = async (req, res) => {
  const { name, attemps, earnPoints, quizResult, quizName, questionId } =
    req.body;

  if (!name || !attemps || !quizResult || !quizName) {
    res.send("{ Missing Result Info }");
    return;
  }

  const newResult = await Result.create({
    name,
    attemps,
    earnPoints,
    quizResult,
    quizName,
    questionId,
  });

  res.status(200).send(newResult);
};

const getAllResults = async (req, res) => {
  const allResults = await Result.findAll();
  res.status(200).send(allResults);
};

const getOneResult = async (req, res) => {
  const result = await Result.findByPk(req.params.id);
  if (!result) {
    res.send(`resultID ${req.params.id} does not Exits`);
    return;
  }
  res.status(200).send(result);
};

const updateResult = async (req, res) => {
  const { name, attemps, earnPoints, quizResult, quizName, questionId } =
    req.body;

  await Glass.update(
    { name, attemps, earnPoints, quizResult, quizName, questionId },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  const result = await Result.findByPk(req.params.id);
  res.status(200).send(result);
};

const deleteResult = async (req, res) => {
  await Result.destroy({
    where: { id: req.params.id },
  });
  res.send("Results dropped!");
};

module.exports = {
  addResult,
  getAllResults,
  getOneResult,
  updateResult,
  deleteResult,
};
