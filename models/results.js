const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Results = sequelize.define(
  "Results",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    studentName: DataTypes.STRING,
    attemps: DataTypes.INTEGER,
    earnPoints: DataTypes.INTEGER,
    quizResult: DataTypes.STRING,
    quizName: DataTypes.STRING,
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = Results;
