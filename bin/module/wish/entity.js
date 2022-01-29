const mongoose = require('mongoose');
const moment = require('moment-timezone');

const WishSchema = mongoose.Schema({
  wishId: { type: String, required: true },
  author: { type: String, required: true },
  attendace: {
    type: String,
    required: true,
    enum: [
      'hadir',
      'tidak hadir',
      'mungkin hadir',
    ]
  },
  wish: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: moment.tz(Date.now(), 'Asia/Jakarta') },
  updatedAt: { type: Date, default: moment.tz(Date.now(), 'Asia/Jakarta') },
},{
  versionKey: false,
});

module.exports = mongoose.model('wishes', WishSchema);
