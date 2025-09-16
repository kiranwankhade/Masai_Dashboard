import {
  GET_EVENT,
  ERROR_EVENT,
  LOADING_EVENT,
  GET_SINGLE_EVENT,
  LOADING_SINGLE_EVENT,
  ERROR_SINGLE_EVENT,
} from "./actionType";

const initState = {
  allEvents: [],
  isLoading: false,
  isError: false,
};
export const eventReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_EVENT:
      return {
        ...state,
        allEvents: payload,
        isLoading: false
      };
    case ERROR_EVENT:
      return {
        ...state,
        isError: true,
        isLoading: false
      };
    case LOADING_EVENT:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case GET_SINGLE_EVENT:
      return {
        ...state,
        isLoading: false,
        isError: false
      };
    case ERROR_SINGLE_EVENT:
      return {
        ...state,
        isError: true,
      };
    case LOADING_SINGLE_EVENT:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
