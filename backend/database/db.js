const mongoose = require('mongoose');
require('dotenv').config();

if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not defined in the environment variables');
}

const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log(`Connected to database: ${conn.connection.name}`); 
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = ConnectDB;