const Results = require("../models/results");

const getAllResults = async (req, res, next) => {
  const allResults = await Results.findAll();
  res.send(allResults);
};

const createOneResult = async (req, res, next) => {
  const { name, attemps, statuses, quizName, questionId } = req.body;

  if (!name || !attemps || !statuses || !quizName) {
    res.send("{ Missing Glass Info }");
    return;
  }

  const newResult = await Glass.create({
    name,
    attemps,
    statuses,
    quizName,
    questionId,
  });

  res.send(newResult);
};

const getOneResult = async (req, res, next) => {
  const Result = await Results.findAll({
    where: {
      id: +req.params.id,
    },
  });
  if (!Result) {
    res.send(`resultID ${req.params.id} does not Exits`);
    return;
  }

  res.send(Result);
};

const putOneResult = async (req, res, next) => {
  const Result = await Results.findAll({
    // this to make sure the glass even exits
    where: {
      id: +req.params.id,
    },
  });
  if (!Result) {
    res.send(`ResultID ${req.params.id} does not Exits`);
    return;
  }

  await Glass.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  const overWrittenResult = await Glass.findAll({
    where: { id: req.params.id },
  });
  res.send(overWrittenResult);
};

const patchOneGlass = async (req, res, next) => {
  const Result = await Results.findAll({
    where: {
      id: +req.params.id,
    },
  });
  if (!Result) {
    res.send(`GlassID ${req.params.id} does not Exits`);
    return;
  }

  await Results.update(req.body, { where: { id: req.params.id } });
  updatedResult = await Glass.findAll({ where: { id: req.params.id } });
  res.send(updatedResult);
};

const deleteOneResult = async (req, res, next) => {
  await Results.destroy({
    where: { id: +req.params.id },
  });
  res.send(`ResultsId ${req.params.id} dropped!`);
};

module.exports = {
    getAllResults,
    createOneResult,
    getOneResult,
    putOneResult,
    patchOneGlass,
    deleteOneResult,
}
