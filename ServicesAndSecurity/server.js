var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/User'); // require the db model
var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://username:password@ds143340.mlab.com:43340/security');

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

// router.route('/note')
// // get all notes from the database
// .get((req, res) => {
//   Note.find((err, notes) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(notes);
//   });
// })
// // add new note to database
// .post((req, res) => {
//   const note = new Note();
//   note.text = req.body.text;
//   note.save((err) => {
//     if (err) {
//       res.send(err);
//     }
//
//     res.json('New note was saved!');
//   });
// })
// // update note in the database
// .put((req, res) => {
//   Note.findOneAndUpdate({ "_id": req.body.id }, { "text": req.body.text }, { new: true },  (err, data) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(data);
//     }
//   })
// });

app.use('/api', router);

app.listen(port, function () {
  console.log(`api running on port ${port}`);
});
