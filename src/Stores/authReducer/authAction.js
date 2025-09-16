import axios from "axios";
import {
  addNewUserApi,
  getOtp,
  loginOtpApi,
  loginUserApi,
} from "../API's/authApi";
import {
  SET_AUTH,
  LOGOUT_USER,
  USER_ADD_SUCCESS,
  GET_SIGNUP_VERIFY,
  GET_LOGIN_VERIFY,
  USER_LOGIN_SUCCESS,
} from "./authActionType";
import { GetUserTypes } from "./authActionType";
export const setAuthCreator = (payload) => {
  return { type: SET_AUTH, payload };
};

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

const getUserType = (payload) => ({
  type: GetUserTypes.GET_USER,
  payload,
});

const getRequest = () => ({
  type: GetUserTypes.GET_REQUEST,
});

const getError = () => ({
  type: GetUserTypes.GET_ERROR,
});

export const userLogin = (userData) => async (dispatch) => {
  dispatch(getRequest());

  let newData = {
    phoneNumber: userData.phoneNumber,
    email: userData.isEmail,
  };
  // console.log(newData);
  try {
    let res = await loginUserApi(userData);
    console.log("Actionres:", res.data);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error("API Error:", err.response ? err.response.data : err.message);
    dispatch({ type: GetUserTypes.GET_ERROR });
  }
};

export const userLogoutAction = () => async (dispatch) => {
  dispatch(getRequest());
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/user/logout`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    console.log("Logout action:", res.data);
    dispatch(logoutUser());
  } catch (err) {
    dispatch({ type: GetUserTypes.GET_ERROR });
  }
};

export const otpVerification = (userData) => async (dispatch) => {
  // let user = {
  //     name:userData.name,
  //     email:userData.email,
  //     phoneNumber:userData.phoneNumber,
  //     otp:userData.otp
  // }
  console.log("user Data", userData);
  try {
    let res = await getOtp(userData);
    // console.log('OTP page:', res.data)
    dispatch({
      type: GET_SIGNUP_VERIFY,
      payload: res.data,
    });
  } catch (err) {
    // console.log('err:', err);
    dispatch({ type: GetUserTypes.GET_ERROR });
  }
};

export const loginOtpVerification = (userData) => async (dispatch) => {
  try {
    let res = await loginOtpApi(userData);
    console.log("getOTP:", res.data);
    dispatch({
      type: GET_LOGIN_VERIFY,
      payload: res.data,
    });
  } catch (err) {
    console.error("API Error:", err.response ? err.response.data : err.message);
    dispatch({ type: GetUserTypes.GET_ERROR });
  }
};

// New user Signup
export const addNewUser = (userData) => async (dispatch) => {
  dispatch(getRequest());
  let newData = {
    name: userData.name,
    email: userData.email,
    phoneNumber: userData.phoneNumber,
  };
  // console.log(newData);
  try {
    let res = await addNewUserApi(newData);
    console.log("Actionres:", res.data);
    dispatch({
      type: USER_ADD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: GetUserTypes.GET_ERROR });
  }
};
