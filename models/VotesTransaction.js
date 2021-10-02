const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class VotesTransaction extends Model {}

VotesTransaction.init({
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
        type: DataTypes.INTEGER,
        allowNull: false,
        min: 1,
        max: 4
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    vote_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'VotesMain',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'VotesTransactionsource',
});

module.exports = VotesTransaction;
