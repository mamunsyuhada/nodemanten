const mongoose = require('mongoose');

const SubcribeSchema = mongoose.Schema({
  subcribeId: { type: String, required: true },
  email: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
},{
  versionKey: false,
  timestamps: true,
});

module.exports = mongoose.model('subcribe', SubcribeSchema);
