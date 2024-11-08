const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// POST route to add a new user
router.post('/add', userController.addUser);

// GET route to fetch all users
router.get('/', userController.getUsers);

// DELETE route to delete a user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
