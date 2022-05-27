const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createUserFriend,
  deleteUserFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:usertId
router.route('/:userId').get(getSingleUser).put(updateUser)

module.exports = router;