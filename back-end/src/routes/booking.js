const { addBooking } = require('../controller/booking');
const { isAuth } = require('../utils/auth');

const bookingRoutes = require('express').Router();
bookingRoutes.post('/add-booking',isAuth,  addBooking);


module.exports = bookingRoutes