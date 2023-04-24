const sequelize = require("../config/dbConfig");
const Quiz = require("./quizzes");
const Result = require("./results");
const User = require("./users");

function relate() {
  sequelize.sync();

  User.hasMany(Quiz);
  Quiz.belongsTo(User);

  User.hasMany(Result);
  Result.belongsTo(User);

  Quiz.hasMany(Result);
  Result.belongsTo(Quiz);

  sequelize.sync();
}

module.exports = relate;
