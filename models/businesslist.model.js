let mongoose = require('mongoose');

// Create a model class
let businesslistModel = mongoose.Schema(
    {
        name: String,
        number: String,
        email: String
    },
    {
        collection: "businesslist"
    }
);

module.exports = mongoose.model('businesslist', businesslistModel);