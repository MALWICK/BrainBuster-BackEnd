const { DataTypes } = require("sequelize");
const sequelize = require("");
const Admin = sequelize.define(
  "Admin",
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
    Password: DataTypes.STRING,
    is_SuperAdmin: false,
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Admin;
