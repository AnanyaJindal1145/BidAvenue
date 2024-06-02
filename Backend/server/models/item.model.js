const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  condition: { type: String, required: true },
  age: { type: Number, required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  images: [{ type: String }],
  initialBid: { type: Number, required: true },
  auctionDuration: { type: Number, required: true },
  bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Auction' }]
});

module.exports = mongoose.model('Item', itemSchema);