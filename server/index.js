const express = require('express');
const cors=require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/userRoutes');
const chatRoutes =require('./Routes/chatRoutes');
const messageRoutes = require('./Routes/messageRoutes');

// Import required modules

// Create an instance of Express
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user', userRoutes);
app.use("/api/chat",chatRoutes);
app.use("/api/message", messageRoutes);

require("dotenv").config();
// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

mongoose.connect(process.env.AADY_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB', error);
    });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
});
