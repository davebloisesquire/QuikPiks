const router = require('express').Router();
const sequelize = require('../../config/connections');
const { VotesMain, VotesTransaction } = require('../../models');

// GET your Votes (view votes your)
router.get('/votes/:user_id', (req, res) => {
    VotesMain.findAll({
            where: {
                user_id: req.params.user_id
            }
        }).then((myVotes) => {
            res.json(myVotes);
        })
        .catch((error) => res.json(error))
});

// GET others votes (view votes others)
router.get('/open-vote', (req, res) => {
    VotesMain.findAll({
            // Pulls a random vote for the user to vote on
            order: sequelize.random(),
            // Makes sure it's only one
            limit: 1,
            // TODO: Where params should validate that the vote is still open via timestamp and that the user has not voted on it yet
            // where: {
            //     deadline: {
            //       $lte: Date.now()
            //     }
            // },
            include: {
              // model: VotesTransaction
             model: VotesTransaction, attributes: ['user_id']
            }
            ,
        })
        .then((votesData) => {
            res.json(votesData);
        })
        .catch((error) => res.json(error));
});

// GET vote results
router.get('/results/:vote_id', (req, res) => {
  VotesTransaction.findAll({
    //Checks which vote you want to see results for and displays them
          where: {
              vote_id: req.params.vote_id
          }
      }).then((results) => {
          res.json(results);
      })
      .catch((error) => res.json(error))
})

// GET vote info for results
router.get('/main/:vote_id', (req, res) => {
  VotesTransaction.findByPk(req.params.vote_id)
      .then((results) => {
          res.json(results);
      })
      .catch((error) => res.json(error))
})

// POST new vote (Creating a vote)
router.post('/new', (req, res) => {
  // Creates a new poll for users to vote on
    VotesMain.create(req.body)
        .then((newVote) => {
            res.json(newVote);
        })
        .catch((error) => res.json(error))
})

// POST ballot (Submitting a ballot)
router.post('/submit', (req, res) => {
    VotesTransaction.create(req.body)
        .then((ballot) => {
            res.json(ballot);
        })
})

// GET user voting history
router.get('/history2/:user_id', (req, res) => {
    VotesTransaction.findAll({
            where: {
                user_id: req.params.user_id
            },
            include: {
                model: VotesMain
            }
        }).then((voteHistory) => {
            res.json(voteHistory);
        })
        .catch((error) => res.json(error))
})

// GET user voting history
router.get('/history', (req, res) => {
    VotesTransaction.findAll({
            where: {
                user_id: req.session.user.id
            }
        }).then((voteHistory) => {
            res.json(voteHistory);
        })
        .catch((error) => res.json(error))
})


module.exports = router;
