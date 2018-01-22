const express    = require('express');
const mongoose   = require('mongoose');
const app = express();

const PORT = 3000;
const mongoURI = 'mongodb://localhost/decidr';

const db = mongoose.connection;
db.on('error', (err) => console.log('Mongo error: ', err));
db.on('connected', () => console.log('Mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('Mongo disconnected'));
mongoose.Promise = global.Promise;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.listen(PORT, () => console.log('running on port: ', PORT));
