const mongoose = require('mongoose')

const beerSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Brewery: {
    type: String,
    required: true
  },
  Type: {
    type: String,
    required: true
  },
  Rating: {
    type: Number,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Beer', beerSchema)
