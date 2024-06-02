const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  finalSellingPrice: { type: Number, required: true },
  orderTime: { type: Date, default: Date.now },
  paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], required: true },
  shipmentStatus: { type: String, enum: ['pending', 'shipped', 'delivered'], required: true }
});

module.exports = mongoose.model('Order', orderSchema);