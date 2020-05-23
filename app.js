const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app

const mongoose = require('mongoose');
const app = express();
const user = require('./routes/user.route'); // Imports routes for user
let port = 8000;
const server = 'mongodb://127.0.0.1:27017/crud'; // REPLACE WITH YOUR DB SERVER
// const database = 'crud';      // REPLACE WITH YOUR DB NAME

const mongoDB = process.env.MONGODB_URI || server;

//creating a mongoDB connection
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

//checking connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//this is very must for posting and putting
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/users',user);


app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
