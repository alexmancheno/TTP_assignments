var pg = require('pg');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', './views');

var dbURL = process.env.DATABASE_URL;
console.log(dbURL);

app.get('/', function(req, res) {
    res.render('homepage');
    console.log();
})

app.listen(3000, function() {
    console.log("Your app is running!");
})
