var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyparser = require('body-parser');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var session = require('express-session');
var app = express();

app.use(morgan('combined'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));
app.use(session({
    
    secret : 'vamefa00',
    cookie : {maxage : 30*24*60*60*1000},
    resave : false,
    saveUninitialized : false
    
}));

var config = {
    user: 'mbvhjkuddonhoa',
    database: 'db3fj52a60edal',
    host: 'ec2-54-163-254-76.compute-1.amazonaws.com',
    port: '5432',
    password: '4c792d9037905c571b8043c4015009015b6345ffbea7d28e41371843d5dda21f'
};

var pool=new Pool(config);



var port = process.env.PORT || 8000;

app.listen(port , function(){
    
   console.log("Server listening at port " + port);
    
});