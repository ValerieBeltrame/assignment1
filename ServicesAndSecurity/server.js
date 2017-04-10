var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/User'); // require the db model
var app = express();
var router = express.Router();
var dbUser = require('./secrets.json').dbUser;
var canvasToken = require('./secrets.json').canvas.token;
var request = require('request');

var port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://' + dbUser.username +':' + dbUser.password + '@ds143340.mlab.com:43340/security');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', function (req, res) {
  res.json({ message: 'API Initialized!' });
});

router.route('/courses')
.get((req, res) => {
  request('https://ucn.instructure.com/api/v1/courses?access_token=' + canvasToken).pipe(res);
})

app.use('/api', router);

app.listen(port, function () {
  console.log(`api running on port ${port}`);
});
