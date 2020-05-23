const Users = require('../models/user.model');

//the C part of application which first creates an instance of model and then saves it.
exports.user_create = function (req, res) {
    var user=new Users(
        {
            //passing name,username and password as body 
            name: req.body.name,
            username: req.body.username,
	        password: req.body.password
        });
        user.save(function (err,user) {
        if (err) res.send(err);
        res.send('user Created successfully');
    })
};

// the retrieve or read part of application which can find specific or all documents.
//note here that in mongodb we have an toArray option but in mongoose we dont

exports.user_details = function (req, res) {
    Users.findOne({'name':req.params.name}, function (err, user) {
        if (err) res.send(err);
        if(user) {
            var string=JSON.stringify(user);
            //note this step is necessary because parse can't be done because of undefined characters in JSON object
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

//the U part of application which uses PUT request.
exports.user_update = function (req, res) {
    //the mongoose function find one and update takes name from parameter and matches the corresponding document
    Users.findOneAndUpdate({'name':req.params.name}, 
    {$set: {
        //the set method updates document
        'username':req.body.username,
        'password':req.body.password} },
        function (err, user) {
        if (err) return res.send(err);
        else res.send(req.params.name);
    });
};



//the D delete part of crud application. it uses DELETE httprequest
exports.user_delete= function(req,res){
    //in request we get name as parameter or even id 
    Users.deleteOne({'name':req.params.name}, function(err){
        if(err)
        res.send(err);
        res.send("deleted successfully");
    })
}