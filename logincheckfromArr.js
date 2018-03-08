var express = require('express');
var app =express();
var ejs = require('ejs');
var bodyParser = require('body-parser');

var PORT = process.env.PORT|| 8080;

var urlEncoderParser = bodyParser.urlencoded({extended: false});
app.use('/assets',express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('login');
});

function userNameList(req,res,next){
    res.users = [{
                    userName: 'subha',
                    passWord: 'sitalakshmi13'
                 },
                 {
                    userName:'sub38',
                    passWord:'sita54'
                 }]
    next();
}

app.use(userNameList);

app.post('/login',urlEncoderParser, function(req,res){
    var match = false;
    users = res.users;
    for ( var i = 0; i <users.length; i++){
        console.log(`The usersname${i} is ${users[i].userName} and the form username is ${req.body.userName}`);
        console.log(`The usersname${i} is ${users[i].passWord} and the form username is ${req.body.passWord}`);

        if (users[i].userName === req.body.userName && users[i].passWord === req.body.passWord){
            res.render('welcome',{userName: req.body.userName});
            match = true;
            break;
        }

    }
    if (!match){
        res.render('login');
    }

})

app.listen(PORT);
