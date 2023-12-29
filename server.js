// Dependencies
// Load express
const express = require('express');

// Initialize express
const app = express()

// Require and initialize dotenv
require('dotenv').config();

// Port Configuration
const port = process.env.PORT;

// Nodejs to look for all the static file in public folder (CSS, JS, Audio, Videos, Images).
app.use(express.static("public"));

// Database Configuration
const db = require("./config/db");

//Import Routes (NEEDS TO BE ADDED)
const facilityRouter = require("./routes/facility");
const paymentRouter = require("./routes/payment");
const reservationRouter = require("./routes/reservation");
const sportRouter = require("./routes/sport");
const stadiumRouter = require("./routes/stadium");
const userRouter = require("./routes/user");

//Mount Routes (NEEDS TO BE ADDED)
app.use('/facility',facilityRouter)
// app.use('/payment',paymentRouter)
app.use('/reservation',reservationRouter)
// app.use('/sport',sportRouter)
app.use('/stadium',stadiumRouter)
app.use('/user',userRouter) 



//connection 
app.listen(port, () => {
    console.log(`Stadium Spotter is running on port ${port}`);
  });