const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Menu', menuSchema);
