require('dotenv').config(); // Load environment variables

let mongoose = require('mongoose');

let atlasDB = `mongodb+srv://${process.env.ATLAS_DB_USERNAME}:${process.env.ATLAS_DB_PASSWORD}@${process.env.ATLAS_DB_CLUSTER}/?retryWrites=true&w=majority&appName=nerdman`;


module.exports = function(){
    //connect to database
    mongoose.connect(atlasDB);

    let mongodb = mongoose.connection;

    mongodb.once('error', console.error.bind("connection error"));
    mongodb.once('open', ()=>{
        console.log("=== Connected to mongoDB ===");
    });

    return mongodb;
}