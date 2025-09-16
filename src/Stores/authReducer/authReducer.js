import {
  GET_LOGIN_VERIFY,
  GET_SIGNUP_VERIFY,
  GetUserTypes,
  USER_ADD_SUCCESS,
  USER_LOGIN_SUCCESS,
} from "./authActionType";
import { SET_AUTH, LOGOUT_USER } from "./authActionType";

let tokens = JSON.parse(localStorage.getItem("token"));
let isAuthKey = JSON.parse(localStorage.getItem("isAuth"));
let user = JSON.parse(localStorage.getItem("user"));

const initState = {
  users: user || {},
  token: tokens || "",
  isAuth: isAuthKey || false,
  isLoading: false,
  isError: false,
};

export const authReducer = (oldState = initState, action) => {
  switch (action.type) {
    case USER_ADD_SUCCESS:
      return {
        ...oldState,
        isAuth: true,
        token: null,
        users: action.payload.user,
      };

    case GET_SIGNUP_VERIFY:
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("isAuth", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...oldState,
        isAuth: true,
        token: action.payload.token,
        users: action.payload.user,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...oldState,
        isAuth: true,
        token: null,
        isLoading: false,
        users: action.payload,
      };

    case GET_LOGIN_VERIFY:
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("isAuth", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...oldState,
        isAuth: true,
        isLoading: false,
        token: action.payload.token,
        users: action.payload.user,
      };

    case SET_AUTH:
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("isAuth", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...oldState,
        isAuth: true,
        token: action.payload.token,
        users: action.payload.user,
      };

    case LOGOUT_USER:
      return {
        ...oldState,
        isLoading:false,
        isAuth: false,
        token: null,
        users: null,
      };

    case GetUserTypes.GET_USER:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        user: action.payload.user,
      };

    case GetUserTypes.GET_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };

    case GetUserTypes.GET_ERROR:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    default:
      return oldState;
  }
};
