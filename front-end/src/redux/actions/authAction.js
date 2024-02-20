
import axios from '../../configs/axios.config';

// define action type
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const login = (email, password) => async (dispatch) => {
  console.log("🚀 ~ login ~ email, password:", email, password)
  dispatch({ type: LOGIN_REQUEST });

  try {
    const response = await axios.post('/api/auth/login', { email, password });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const register = (userData) => async (dispatch) => {
  // console.log("🚀 ~ register ~ userData:", userData)
  dispatch({ type: REGISTER_REQUEST });

  try {
    const response = await axios.post('/api/auth/register', userData);
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.message });
  }
};