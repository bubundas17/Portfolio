const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = new mongoose.Schema({
  name: {
    type: String,
    min: 1,
    required: true
  },
  username: {
    type: String,
    min: 6,
    unique: true
  },
  email: {type: String, required: true},
  password: {
    type: String,
    required: true
  },
  salt: {
    type: String
  },
  isAdmin: {type: Boolean, default: false}
});
Schema.plugin(mongoosePaginate);
module.exports = mongoose.model('User', Schema);
