const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating an instance of schema
let UserSchema = new Schema({
    //defining the details
    name: {type: String, required: true, max: 100},
    username: {type: String, required: true},
    password:{type:String, required: true},
});


// Export the model
module.exports = mongoose.model('Users', UserSchema);
