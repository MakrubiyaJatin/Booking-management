import axios from '../../configs/axios.config';

// define action type
export const BOOKING_REQUEST = 'LOGIN_REQUEST';
export const BOOKING_SUCCESS = 'LOGIN_SUCCESS';
export const BOOKING_FAILURE = 'LOGIN_FAILURE';


export const booking  = (bookingData,token) => async (dispatch) => {
  dispatch({ type: BOOKING_REQUEST });

  try {
    const response = await axios.post('/api/booking/add-booking', bookingData,{
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token }`,
      },
    });
    dispatch({ type: BOOKING_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: BOOKING_FAILURE, payload: error.message });
  }
};