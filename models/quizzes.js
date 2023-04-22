const { DataTypes } = require("sequelize");
const sequelize = require(".");

const Quiz = sequelize.define(
  "Quizzes",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quizName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      adminId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = Quiz;
