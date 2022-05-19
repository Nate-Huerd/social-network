const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/User-controller');

// routes
router.route('/').get(getUsers);
router.route('/').post(createUser);

// singular User Id
router.route('/:userId').get(getSingleUser);
router.route('/:userId').put(updateUser);
router.route('/:userId').delete(deleteUser);

// friends
router.route('/:userId/friends').post(addFriend);
router.route('/:userId/friends/friendId').delete(deleteFriend);

module.exports = router;