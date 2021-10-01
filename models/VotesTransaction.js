const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class VotesTransaction extends Model {}

VotesTransaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    choice: {
      type: DataTypes.INT,
      allowNull: false,
      min: 1,
      max: 4
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    vote_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'VotesMain',
        key: 'id'
      }
    },
  },
);

module.exports = VotesTransaction;
