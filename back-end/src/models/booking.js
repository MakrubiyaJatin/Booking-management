const mongoose = require("mongoose");
const {  BOOKING_TYPE, BOOKING_SLOT } = require("../const");


const bookingSchema = new mongoose.Schema({
    customerName: { type: String },
    email: { type: String },
    bookingDate: { type: Date },
    bookingType: { type: String, enum: Object.values(BOOKING_TYPE) },
    bookingSlot: { type: String, enum: Object.values(BOOKING_SLOT) },
    bookingTime: {type: String},
    deletedAt: { type: String, require: false, default: null }
})

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = { Booking }