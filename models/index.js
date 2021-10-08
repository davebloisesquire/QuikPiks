const User = require('./User');
const Suggestion = require('./Suggestion');
const VotesMain = require('./VotesMain');
const VotesTransaction = require('./VotesTransaction');

User.hasMany(VotesMain, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(VotesTransaction, {
  foreignKey: 'user_id',
});

VotesMain.belongsTo(User, {
  foreignKey: 'user_id',
});

VotesTransaction.belongsTo(User, {
  foreignKey: 'user_id',
});

VotesMain.hasMany(VotesTransaction, {
  foreignKey: 'vote_id',
});

VotesTransaction.belongsTo(VotesMain, {
  foreignKey: 'user_id',
});

module.exports = { User, Suggestion, VotesMain, VotesTransaction };
