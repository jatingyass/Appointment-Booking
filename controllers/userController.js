const User = require('../models/userModel');

// Controller to add a new user
exports.addUser = (req, res) => {
    const { username, email, phone } = req.body;
    User.create({ username, email, phone }, (result) => {
        res.status(201).json({ message: 'User added successfully', result });
    });
};

// Controller to get all users
exports.getUsers = (req, res) => {
    User.getAll((users) => {
        res.status(200).json(users);
    });
};

// Controller to delete a user by ID
exports.deleteUser = (req, res) => {
    const { id } = req.params;
    User.deleteById(id, (result) => {
        res.status(200).json({ message: 'User deleted successfully', result });
    });
};
