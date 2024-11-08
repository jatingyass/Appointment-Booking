const db = require('../config/db');

// Define the user model
const User = {
    // Create (Insert) a new user
    create: (userData, callback) => {
        const query = 'INSERT INTO User (username, email, phone) VALUES (?, ?, ?)';
        db.query(query, [userData.username, userData.email, userData.phone], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    // Get all users
    getAll: (callback) => {
        const query = 'SELECT * FROM User';
        db.query(query, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    },

    // Delete a user by ID
    deleteById: (id, callback) => {
        const query = 'DELETE FROM User WHERE id = ?';
        db.query(query, [id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = User;
