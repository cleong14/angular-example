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
    { title: 'Harry Potter: The Sorcer\'s Stone', year: 2001 },
    { title: 'Harry Potter: Chamber of Secrets', year: 2002 },
    { title: 'Harry Potter: Prisoner of Azkaban', year: 2004 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Scarface', year: 1983 }
  ];
  res.json(movies);
});

var server = app.listen(3000, function() {
  console.log('Listening to port', server.address().port);
});