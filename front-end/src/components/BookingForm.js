import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { booking } from '../redux/actions/bookingAction';
import {  useNavigate } from 'react-router-dom';

const BookingForm = ({booking}) => {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingType, setBookingType] = useState('FULL_DAY');
  const [bookingSlot, setBookingSlot] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [message, setMessage] = useState(null);
  const bookingData = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ bookingData:", bookingData)
    if(bookingData?.booking?.data)
    {
        setMessage(bookingData?.booking?.data?.message);
        setCustomerName('');
        setEmail('');
        setBookingDate('');
        setBookingType('FULL_DAY');
        setBookingSlot('');
        setBookingTime('');
    }
  }, [ bookingData]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(customerName == '' || email == '' || bookingDate == '' || bookingType == '' || bookingSlot == '' || bookingTime == '')
    {
        setMessage('Please enter all fields');
        return;
    }
    if(bookingData?.auth?.auth == null)
    {
      navigate('/login');
    }
    booking({
      customerName,
      email,
      bookingDate,
      bookingType,
      bookingSlot,
      bookingTime,
    }, bookingData.auth.auth.access_token
    )
  };

  return (
    <div class="container">
        <div class="content">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Customer Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="date"
          placeholder="Booking Date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
        />
        <select value={bookingType} onChange={(e) => setBookingType(e.target.value)}>
          <option value="FULL_DAY">Full Day</option>
          <option value="HALF_DAY">Half Day</option>
          <option value="CUSTOM">Custom</option>
        </select>
        {bookingType === 'HALF_DAY' && (
          <select value={bookingSlot} onChange={(e) => setBookingSlot(e.target.value)}>
            <option value="FISRT_HALF">First Half</option>
            <option value="SECOND_HALF">Second Half</option>
          </select>
        )}
        {bookingType === 'CUSTOM' && (
          <input
            type="time"
            value={bookingTime}
            onChange={(e) => setBookingTime(e.target.value)}
          />
        )}
       <br/><button type="submit">Submit</button>
       {message && <p>{message}</p>}
      </form>
    </div>
    </div>
  );
};

export default connect(null, { booking })(BookingForm);
