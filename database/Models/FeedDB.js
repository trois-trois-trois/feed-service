const mongoose = require('mongoose');
const onlineDb = require('../../config/keys');
const Schema = mongoose.Schema;
// mongoose.connect(onlineDb.mongoURI, { useNewUrlParser: true });
mongoose.connect('mongodb://localhost/ESPN');

const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB is connected to the Feeds database');
});


const feedSchema = new Schema({
  author: String,
  authorphoto: String,
  title: String,
  bigphoto: String,
  smallphoto: String,
  newsfeed: String,
  videoclip: String,
  time: { type: Date, default: Date.now }
},
{
  timestamps: true,
});

const FeedDB = mongoose.model('Feed', feedSchema);

// module.exports = db;
// module.exports = FeedDB;

module.exports.db = db;
module.exports.FeedDB = FeedDB;