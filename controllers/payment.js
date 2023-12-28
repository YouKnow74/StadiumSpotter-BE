const {Payment} = require("../models/Payment")

exports.payment_create_post = (req,res) => {
    console.log(req.body);
    let payment = new Payment(req.body);
    payment.save()
    .then(() => {
      res.json({payment})
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later!!")
      })
}
exports.payment_show_get = (req, res) => {
    console.log(req.query.id);
    Payment.findById(req.query.id)
    .then((payment) => {
      res.json({payment})
    })
    .catch((err) => {
      console.log(err);
    })
  }
exports.payment_index_get = (req, res) => {
    Payment.find()
    .then((Payment) => {
      res.json({ Payment })
    })
    .catch((err) => {
      console.log(err);
    })
  }
  exports.payment_edit_get = (req, res) => {
    Payment.findById(req.query.id)
    .then((payment) => {
      res.json({payment})
    })
    .catch(err => {
      console.log(err);
    })
  }
  exports.payment_update_put = (req, res) => {
    console.log(req.body._id);
    Payment.findByIdAndUpdate(req.body._id, req.body)
    .then((payment) => {
      res.json({payment})
  
    })
    .catch(err => {
      console.log(err);
    })
  }
