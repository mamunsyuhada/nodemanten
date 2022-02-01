const mongoose = require('mongoose');

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
  isDeleted: { type: Boolean },
},{
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model('wishes', WishSchema);
