const mongoose = require('mongoose');

// Cuerpo que tendrá el objeto en la base de datos.

const serviceSchema = new mongoose.Schema({
  typeOfService: String,
  pack: String,
  payRef: String,
  method: String,
  isApproved: {
    type: Boolean,
    default: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

serviceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;