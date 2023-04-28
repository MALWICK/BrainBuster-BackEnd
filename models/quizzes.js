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
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    quizLink: DataTypes.STRING,
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quizName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = Quiz;
