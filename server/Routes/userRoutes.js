const express = require('express');
const {registerUser, loginUser, getAllUsers, getUser} = require('../Controllers/userController');

const router = express.Router();
// Define your user routes here
router.post('/register', registerUser);
router.post('/login',loginUser);
router.get('/', getAllUsers);
router.get('/:userId', getUser);
module.exports = router;