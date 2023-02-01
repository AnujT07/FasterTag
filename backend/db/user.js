const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    model: String,
    number_plate: String,
    total: Number,
    outstanding: Number,
    photo: String
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 250
    },
    vehicle: vehicleSchema,
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    mobile_number: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    photo: String
});

module.exports = mongoose.model("user",userSchema);