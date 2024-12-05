const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
  menuItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
