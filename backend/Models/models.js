const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true, 'Le titre est requis'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'La description est requise'],
    trim: true
  },
  telephone: {
    type: String,
    required: [true, 'La description est requise'],
    default: false
  },
  message: {
    type: String,
    required: [true, 'La description est requise'],
    default: false
  }
});

module.exports = mongoose.model('models', taskSchema);