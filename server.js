'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors({
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
}));

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  fs.readdir(__dirname + '/fixtures', function(err, items) {
    var files = items.map(function(item) {
      return path.basename(item, '.js');
    });

    res.render('index', { fixtures: files });
  });
});

app.get('/cds-services/:name', function(req, res) {
  var fixture = require('./fixtures/' + req.params.name);
  res.json(fixture.payload);
});

app.post('/cds-services/:name', function(req, res) {
  var fixture = require('./fixtures/' + req.params.name);
  res.json(fixture.payload);
});

app.get('/cds-services', function(req, res) {
  var services = ['hw-drug-interactions', 'hw-patient-education'].map(function(item) {
    return require('./fixtures/' + item).definition;
  });

  res.json({services: services});
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
