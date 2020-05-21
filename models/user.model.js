const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    username: {type: String, required: true},
    password:{type:String, required: true},
});


// Export the model
module.exports = mongoose.model('Users', UserSchema);
