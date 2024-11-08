const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');  // Add this line to handle file paths
const userRoutes = require('./routes/userRoutes');

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from 'public' folder (for CSS and JS)
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// API routes
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
