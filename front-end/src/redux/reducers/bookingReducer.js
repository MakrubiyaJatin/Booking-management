import {
    BOOKING_REQUEST,
    BOOKING_SUCCESS,
    BOOKING_FAILURE,
  } from '../actions/bookingAction';
  
  const initialState = {
    booking: null,
    loading: false,
    error: null,
  };
  
  const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
      case BOOKING_REQUEST:
        return { ...state, loading: true, error: null };
      case BOOKING_SUCCESS:
        return { ...state, booking: action.payload, loading: false, error: null };
      case BOOKING_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default bookingReducer;