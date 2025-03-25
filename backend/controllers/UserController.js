const User = require('../models/User');

const UserController = {
    async createUser(req, res) {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async getUsers(req, res) {
        try {
            console.log('getUsers called'); 
            const users = await User.find({});
            console.log('Users:', users); 
            res.send(users);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async getUser(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async updateUser(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = UserController;