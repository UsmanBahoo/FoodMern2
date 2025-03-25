const express = require('express');
const dotenv = require('dotenv');
const ConnectDB = require('./database/db');
const cors = require('cors');
// Load environment variables
dotenv.config();

// Connect to the database
ConnectDB();

// Controllers
const UserController = require('./controllers/UserController');
const FeedbackController = require('./controllers/FeedbackController');

const User = require('./models/User');

// Environment variables
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json()); // Add this line to parse JSON request bodies

app.use(cors());

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await  User.findOne({ email, password });
    if(user){
        res.status(200).json({message: 'Login successful', data: user});
    } else {
        res.status(400).json({message: 'Invalid credentials'});
    }   
});

app.get('/feed', (req, res) => {
    FeedbackController.getFeedbacks(req, res);
});

app.post('/feed', (req, res) => {
    FeedbackController.createFeedback(req, res);
});

app.get('/', (req, res) => {
    UserController.getUsers(req, res);
});

app.post('/', (req, res) => {
    UserController.createUser(req, res);
});

app.get('/:id', (req, res) => {
    UserController.getUser(req, res);
});

app.put('/:id', (req, res) => {
    UserController.updateUser(req, res);
});

app.delete('/:id', (req, res) => {
    UserController.deleteUser(req, res);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});