const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    streetName: {
        type: String,
        required: true
    },
    houseNumber: {
        type: Number,
        required: true
    },
    apartmentNumber: {
        type: Number,
        required: false
    },
    postalCode: {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('user', userSchema);

module.exports = User;