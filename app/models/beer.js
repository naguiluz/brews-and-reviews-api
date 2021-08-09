const mongoose = require('mongoose')

const beerSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Brewery: {
    type: String
  },
  Type: {
    type: String
  },
  Rating: {
    type: Number
  },
  Description: {
    type: String
  },
  Image: {
    type: String

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
