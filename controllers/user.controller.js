const User = require('../models/user.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.user_create = function (req, res) {
    let user = new User(
        {
            name: req.body.name,
            username: req.body.username,
	    password:req.body.password,
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('user Created successfully')
    })
};

exports.user_details = function (req, res) {
    User.findOne({'user.name':'req.params.name'}, function (err, user) {
        if (err) res.send(err);
        res.send("foundd");
    })
};