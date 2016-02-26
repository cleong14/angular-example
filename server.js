var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require ('morgan');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve(__dirname + '/public')));

app.use(morgan('dev'));

app.use('/api', function (req, res, next) {
  var movies = [
    { title: 'Harry Potter: The Sorcer\'s Stone' },
    { title: 'Harry Potter: Chamber of Secrets'},
    { title: 'Harry Potter: Prisoner of Azkaban'}
  ];
  res.json(movies);
});

var server = app.listen(3000, function() {
  console.log('Listening to port', server.address().port);
});