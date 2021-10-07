const sequelize = require('../config/connections');
const Users = require('../models/User');
const userData = require('./user');
const voteTransactions = require('../models/VotesTransaction');
const voteTransactionData = require('./voteTransactions');
const voteMain = require('../models/VotesMain');
const voteMainData = require('./voteMain');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await voteMain.bulkCreate(voteMainData, {
    individualHooks: true,
    returning: true,
  });

  await voteTransactions.bulkCreate(voteTransactionData, {
    individualHooks: true,
    returning: true,
  });
  
  process.exit(0);
};

seedDatabase();
