var pg = require('pg');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(req, res) {
    pg.connect('postgres://localhost:5432/bulletinboard', function(err, client, done) {
        client.query('select * from messages', function(err, result) {
            console.log(result.rows);
            done();
            pg.end();
            res.render('homepage', {data: result.rows});
            console.log(result.rows[0]);
            done();
            pg.end();
        })
    })
})

app.post('/', function(req, res) {
    pg.connect('postgres://localhost:5432/bulletinboard', function(err, client, done) {
        client.query(`insert into messages (title, body) values('${req.body.title})', '${req.body.body}')`, function(err, result) {
            res.redirect('/');
            done();
            pg.end();
        })
    })
})

app.get('/message/:id', function(req, res) {
    pg.connect('postgres://localhost:5432/bulletinboard', function(err, client, done) {
        var message_id = req.params.id;
        client.query(`select * from messages where id = '${message_id}' `, function(err, result) {
            res.render('message', {data: result.rows[0]});
            console.log(result.rows);
            done();
            pg.end();
        })
    })
})

app.listen(3000, function() {
    console.log("Yayayayay");
})
