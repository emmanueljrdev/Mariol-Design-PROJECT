const mongoose = require('mongoose');

// Cuerpo que tendrá el objeto en la base de datos.

const briefSchema = new mongoose.Schema({
  question1: String,
  question2: String,
  question3: String,
  question4: String,
  question5: String,
  question6: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

briefSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Brief = mongoose.model('Brief', briefSchema);

module.exports = Brief;