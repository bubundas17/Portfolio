const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  name:{
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true
  },
  size: {
    type: Number,
  },
  path: {
    type: String
  }
});
Schema.plugin(mongoosePaginate);
module.exports = mongoose.model('Post', Schema);
