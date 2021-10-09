const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class VotesMain extends Model {}

VotesMain.init({
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
    option1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    option2: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    option3: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    option4: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    deadline: {
      type: DataTypes.INTEGER,
     /*  defaultValue: Date.now() + 900000, */
     defaultValue: 900000,
      allowNull: false
    },
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'VotesMain',
});

module.exports = VotesMain;
