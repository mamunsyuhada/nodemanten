const mongoose = require('mongoose');
const moment = require('moment-timezone');

const SubcribeSchema = mongoose.Schema({
  subcribeId: { type: String, required: true },
  email: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: moment.tz(Date.now(), 'Asia/Jakarta') },
  updatedAt: { type: Date, default: moment.tz(Date.now(), 'Asia/Jakarta') },
},{
  versionKey: false,
});

module.exports = mongoose.model('subcribe', SubcribeSchema);
