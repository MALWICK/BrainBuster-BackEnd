const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Results = sequelize.define(
  "Results",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    studentName: DataTypes.STRING,
    emailAddress: {
      type: DataTypes.STRING,
      unique: true,
    },
    attemps: DataTypes.INTEGER,
    earnPoints: DataTypes.STRING,
    quizResult: DataTypes.STRING,
    quizName: DataTypes.STRING,
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = Results;
