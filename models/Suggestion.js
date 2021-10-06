const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Suggestion extends Model {}

Suggestion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    suggestion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize
  }
);

module.exports = Suggestion;
