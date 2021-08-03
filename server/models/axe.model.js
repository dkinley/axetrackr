const mongoose = require('mongoose');

const AxeSchema = new mongoose.Schema({
    serial: {
        type: String,  //this is the validation for a name for the db
        required: [ true, "You must input a serial"],  //true - this is a required field, the 2nd part is the requirement
        minlength: [1, "The name must be at least 1 characters long"],
    },
    make: {
        type: String,
        enum: [ "Fender", "Gibson", "Martin", "Taylor", "Ibanez", "Yamaha", "Epiphone", "Schecter", "Squier", "Other" ],
        // if it doesn't match one of these enums exactly it won't pass validaiton
        minlength: [0, "You need to select the make of the instrument"],
        maxlength: [1, "You can only select up to three genres"],
    },
    model: {
        type: String,
        enum: [ "Fender", "Gibson", "Martin", "Taylor", "Ibanez", "Yamaha", "Epiphone", "Schecter", "Squier", "Other" ],
        // if it doesn't match one of these enums exactly it won't pass validaiton
        minlength: [0, "You need to select the make of the instrument"],
        maxlength: [1, "You can only select up to three genres"],

    year: {
        type: Number,
        required: [ false, ""],
        min: [ 1930, "The instrument must be manufactured no earlier than 1930"],
    },
    description: {
        type: String, 
        required: [ true, "You must input a description"],  //true - this is a required field, the 2nd part is the requirement
        minlength: [10, "Tell us about any modifications, what string gauge it plays best with and anything else noteable"],
    },
},
    { timestamps: true }); // need it! this is the options of the Schema, required
    module.exports = mongoose.model("Lit", LitSchema);