const sequelize = require("../config/dbConfig");
const quiz = require("./quizzes");
const result = require("./results");
const user = require("./users");

function relate() {
  sequelize.sync();

  user.hasMany(quiz);
  quiz.belongsTo(user);

  user.hasMany(result);
  result.belongsTo(user);

  quiz.hasMany(result);
  result.belongsTo(quiz);

  sequelize.sync();
}

module.exports = relate;
