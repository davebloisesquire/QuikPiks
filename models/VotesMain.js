const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class VotesMain extends Model {}

VotesMain.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    options: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    count: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    time_to_vote: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

module.exports = VotesMain;
