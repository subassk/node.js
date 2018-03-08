var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose' );

var PORT = process.env.PORT || 8080;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine','ejs');

mongoose.connect('mongodb://subassk:subassk@ds161021.mlab.com:61021/my_employee');
var urlEncoderParser = bodyParser.urlencoded({extended:false});
var schema = mongoose.Schema;

var UserSchema = new schema({
        username:String,
        password: String
});

var Users = mongoose.model('users',UserSchema);
// removing the unnecessary documents from the collection.
if (Users.length > 0){
    Users.remove().exec();
    console.log('Documents Deleted');
}

var user1 = Users({
    username: 'subha',
    password:'sitalakshmi13'
})

user1.save(function(err){
    if (err) throw err;
    console.log('User1 data saved!!!');
});

var user2 = Users({
    username: 'ssk77',
    password:'sekkarukudi'
});

user2.save(function(err){
    if (err) throw err;
    console.log('User2 data saved!!!');
});

var user3 = Users({
    username: 'sub38',
    password:'sita54'
});

user3.save(function(err){
    if (err) throw err;
    console.log('User3 data saved!!!');
});

var user4 = Users({
    username: 'kandasamy',
    password:'sekkarakudi69'
});

user4.save(function(err){
    if(err) throw err;
    console.log('User4 data saved');
});

app.get('/', function(req,res){
    res.render('login');
  //  console.log('Sign In form rendered!!!');
})

app.post('/login',urlEncoderParser, function(req,res) {
    var usrnme = req.body.username;
    var passwrd = req.body.password;
    console.log(`The username and password in form is ${usrnme} and ${passwrd}`);

    if (usrnme && passwrd) {
        Users.find({username:usrnme},function(err,user){
            if(!err){
                if(user && user.length && user[0].password == passwrd) {
                    console.log(`match found`);
                    res.render('welcome', {userName: req.body.username});
                }
                else if (user && user.length && user[0].password !== passwrd) {
                    console.log('Invalid password');
                    return res.redirect('/');
                }
                else{
                    console.log('Invalid Username');
                    return res.redirect('/');
                }

            }
        });
    }
    else {
        console.log('Empty userid and Password');
        return res.redirect('/')
    }
});

app.listen(8080)
