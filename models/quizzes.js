const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Quiz = sequelize.define(
  "Quizzes",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    question: { type: DataTypes.STRING, allowNull: false },
    option1: { type: DataTypes.STRING, allowNull: false },
    option2: { type: DataTypes.STRING, allowNull: false },
    option3: { type: DataTypes.STRING, allowNull: false },
    option4: { type: DataTypes.STRING, allowNull: false },
    answer: { type: DataTypes.STRING, allowNull: false },
    quizTimer: { type: DataTypes.STRING, allowNull: false },
    quizName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quizImageUrl: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = Quiz;
