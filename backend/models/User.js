const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
    },
    password: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    gender: {
        type: String,
    },
    address:{
        flat: {
            type: String,
            
        },
        Buliding: {
            type: String,
        },
        Area: {
            type: String,
            
        },
        Town: {
            type: String,
            
        },
        city:{
            type: String,
            
        },
        state:{
            type: String,
            
        },
        country:{
            type: String,
    
        },
        pincode:{
            type: Number,
        },
    },

    
});

const User = mongoose.model('User', userSchema);

module.exports = User;