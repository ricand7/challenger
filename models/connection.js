// require('dotenv').config(); retirado
const mongodb = require('mongodb').MongoClient;

// process.env.MONGO_DB_URL || retirado
const MONGO_DB_URL = 'mongodb://localhost:27017/';
const DB_NAME = 'challenger';

module.exports = () => mongodb.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((connection) => connection.db(DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
