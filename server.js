'use strict';

const express = require('express');
const fs = require('fs');

const PORT = process.env.PORT || 9000;

const app = express();
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  fs.readdir(__dirname + '/fixtures', function(err, items) {
    res.render('index', { fixtures: items });
  });
});

app.get('/fixtures/:name', function(req, res) {
  var options = {
    root: __dirname + '/fixtures/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  var fixture = req.params.name;
  return res.sendFile(fixture, options, function(err) {
    if (err) {
      res.status(err.status).end();
    }
  });
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
