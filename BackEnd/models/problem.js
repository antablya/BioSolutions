const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProblemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  defination: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Problem = mongoose.model('problems', ProblemSchema);
