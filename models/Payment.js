const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
  status: String,
  date: Date,
  price: String,
  reservation: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservation'
  }],
}, {
  timestamps: true
});

// Creating Model
const Payment = mongoose.model("Payment", PaymentSchema);

// Export
module.exports = {Payment};