const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    addReaction,
    deleteReaction,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughts-controller');

// routes
router.route('/').get(getThoughts);
router.route('/').post(createThought);

// singular thought Id
router.route('/:thoughtId').get(getSingleThought);
router.route('/:thoughtId').put(updateThought);
router.route('/:thoughtId').delete(deleteThought);

// reactions
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/reactionId').delete(deleteReaction);

module.exports = router;