const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  bidder: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bidAmount: { type: Number, required: true },
  bidTime: { type: Date, default: Date.now },
  auctionStatus: { type: String, enum: ['active', 'ended'], required: true }
});

module.exports = mongoose.model('Auction', auctionSchema);