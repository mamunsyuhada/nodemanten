const mongoose = require('mongoose');

const BruteForceSchema = mongoose.Schema({
  _id: { type: String },
  data: {
    count: Number,
    lastRequest: Date,
    firstRequest: Date
  },
  expires: { type: Date, index: { expires: 30 } },
}, {
  versionKey: false,
});

module.exports = mongoose.model('bruteForce', BruteForceSchema);
