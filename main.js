/*
    Uses express, dbcon for database connection, body parser to parse form data
    handlebars for HTML templates
*/

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'handlebars');
app.set('port', process.argv[2]);
app.use(express.static('public'));
app.get('/', function(req,res) {
	res.render('index');
})

app.get('/index', function(req,res) {
	res.render('index');
})

app.get('/logout', function(req,res) {
	res.render('logout');
})


app.get('/test', function(req,res) {
	res.render('test');
})

app.get('/profile', function(req,res) {
	res.render('profile');
})


app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
