const { GENDER, BOOKING_TYPE, BOOKING_SLOT } = require("../const");
const {  Booking } = require("../models/booking");

const addBooking = async (req, res) => {
    const { customerName,
        email,
        bookingDate,
        bookingType,
        bookingSlot,
        bookingTime } = req.body;
    try {

        const existingBooking = await Booking.findOne({ bookingDate: new Date(bookingDate) });

        if (existingBooking) {
            if (
              (existingBooking.bookingType === BOOKING_TYPE.FULL_DAY && bookingType === BOOKING_TYPE.FULL_DAY) ||
              (existingBooking.bookingType === BOOKING_TYPE.HALF_DAY && bookingType === BOOKING_TYPE.FULL_DAY && existingBooking.bookingSlot === BOOKING_SLOT.SECOND_HALF) ||
              (existingBooking.bookingType === BOOKING_TYPE.CUSTOM && bookingType === BOOKING_TYPE.FULL_DAY) ||
              (existingBooking.bookingType === BOOKING_TYPE.HALF_DAY && bookingType === BOOKING_TYPE.HALF_DAY && existingBooking.bookingSlot === bookingSlot) ||
              (existingBooking.bookingType === BOOKING_TYPE.CUSTOM && bookingType === BOOKING_TYPE.HALF_DAY && existingBooking.bookingTime === bookingTime) ||
              (existingBooking.bookingType === BOOKING_TYPE.CUSTOM && bookingType === BOOKING_TYPE.CUSTOM && existingBooking.bookingTime === bookingTime)
            ) {
              return res.status(400).json({ error: 'Duplicate booking' });
            }
          }
        const booking = await new Booking({customerName,
            email,
            bookingDate: new Date(bookingDate),
            bookingType:BOOKING_TYPE[bookingType.toUpperCase()] ?? BOOKING_TYPE.FULL_DAY,
            bookingSlot: BOOKING_SLOT[bookingSlot.toUpperCase()],
            bookingTime}).save();
        return res.status(200).json({ message: "Booking Created !", data: booking });
    } catch (error) {
        console.error('error  ', error);
        return res.status(500).json({ message: "Server Error!" })
    }
}



module.exports = { addBooking}