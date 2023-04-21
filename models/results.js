const { DataTypes } = require("sequelize");
const sequelize = require(".");

const Results = sequelize.define(
  "Results",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    attemps: DataTypes.INTEGER,
    status: DataTypes.STRING,
    quizName: DataTypes.STRING,
    questionId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = Results;
