const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const User = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: DataTypes.STRING,
    emailAddress: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    isSuperAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = User;

