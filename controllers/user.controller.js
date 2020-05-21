const Users = require('../models/user.model');

//Simple version, without validation or sanitation
// exports.test = function (req, res) {
//     res.send('Greetings from the Test controller!');
// };

// exports.user_create = function (req, res) {
//     let user = new Users(
//         {
//             'name': req.body.name,
//             'users.username': req.body.username,
// 	        'users.password':req.body.password,
//         }
//     );

//     user.save(function (err) {
//         if (err) {
//             return next(err);
//         }
//         res.send('user Created successfully')
//     })
// };

exports.user_create = function (req, res) {
    let user = new Users(
        {
            'name': 'req.body.name',
            'username': 'req.body.username',
	        'password': 'req.body.password',
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
    Users.findOne({'name':req.params.name}, function (err, user) {
        if (err) res.send(err);
        if(user) {
            var string=JSON.stringify(user);
            string.replace("_","");
            var jsonobj=JSON.parse(string);
            res.send(jsonobj["name"]);
        }
        else res.send("not found");
    })
};

exports.get_all = function (req, res) {
    Users.find().exec(function (err, user) {
        if (err) res.send(err);
        var count=user.length;
        var responseArray=""
        for(var a=0;a<=count;a++){
   
    var string=JSON.stringify(user[a]);
    string.replace("_"," ")
    var parse=JSON.parse(string);
    responseArray+=parse["name"]+="\n";
    console.log(responseArray);
    res.send(parse["name"]);
    
        }

    })
};

exports.user_update = function (req, res) {
    Users.updateOne({'name':req.params.name}, {$set: req.body}, function (err, user) {
        if (err) return res.send(err);
        else res.send(req.params.name);
    });
};

exports.user_delete= function(req,res){
    Users.deleteOne({'name':req.params.name}, function(err){
        if(err)
        res.send(err);
        res.send("deleted successfully");
    })
}