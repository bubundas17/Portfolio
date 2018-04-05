const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {type: String},
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  isAdmin: Boolean
});

module.exports = mongoose.model('User', modelSchema);
