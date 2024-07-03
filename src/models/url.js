const mongoose = require('mongoose');
const shortid = require('shortid');

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, default: shortid.generate },
  userId: {type: String, required: false},
  createdAt: { type: Date, default: Date.now, index: { expires: '24h' } }
});

module.exports = mongoose.model('Url', urlSchema);
