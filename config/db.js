const mysql = require('mysql');

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Your MySQL username
    password: 'Jatin@1234',  // Your MySQL password
    database: 'user_db'  // Your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL Database');
});

module.exports = db;
