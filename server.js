// Dependencies
const express = require('express');
require('dotenv').config();
const db = require("./config/db");

const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.static("public"));

// Routes
const communityRouter = require("./routes/community");
const paymentRouter = require("./routes/payment");
const reservationRouter = require("./routes/reservation");
const albumRouter = require("./routes/album");
const libraryRouter = require("./routes/library");
const userRouter = require("./routes/user");

app.use('/community', communityRouter);
app.use('/payment', paymentRouter);
app.use('/reservation', reservationRouter);
app.use('/album', albumRouter);
app.use('/library', libraryRouter);
app.use('/user', userRouter);

// Homepage Route
app.get('/', (req, res) => {
  res.send('Welcome to the Music Box Library homepage!');
});

// Server Start
app.listen(port, () => {
  console.log(`Music Box Library is running on port ${port}`);
});