const router = require('express').Router();
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
            // Order by title in ascending order
            order: sequelize.random(),
            limit: 1,
            where: {
                time_to_vote: Date
            },
        })
        .then((votesData) => {
            res.json(votesData);
        })
        .catch((error) => res.json(error));
});

// POST new vote (Creating a vote)
router.post('/new-vote', (req, res) => {
    VotesMain.create(req.body)
        .then((newVote) => {
            res.json(newVote);
        })
        .catch((error) => res.json(error))
})

// POST ballot (Submitting a ballot)
router.post('/submit-ballot', (req, res) => {
    VotesTransaction.create(req.body)
        .then((ballot) => {
            res.json(ballot);
        })
})

module.exports = router;