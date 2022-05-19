const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    addReaction,
    removeReaction,
    createThought,
    deleteThought,
} = require('../../controllers/thoughts-controller');

// routes
router.route('/').get(getThoughts);
router.route('/').post(createThought);

router.route