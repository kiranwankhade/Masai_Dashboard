import { POST_EVENT_REGISTER_REQUEST,POST_EVENT_REGISTER_SUCCESS,POST_EVENT_REGISTER_ERROR } from './erActiontype';
import {GET_EVENT_REGISTER_REQUEST,GET_EVENT_REGISTER_SUCCESS,GET_EVENT_REGISTER_ERROR}  from './erActiontype'

const initialState = {
  isLoading: false,
  success: [],
  error: null,
};
const initialState2={
  isLoading:false,
  event:[],
  error:null,
}
export const  erReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_EVENT_REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case POST_EVENT_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.payload,
        error: null,
      };
    case POST_EVENT_REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        success: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export const  geterReducer = (state = initialState2, action) => {
  switch (action.type) {
    case GET_EVENT_REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_EVENT_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        event: action.payload,
        error: null,
      };
    case GET_EVENT_REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        event: [],
        error: action.error,
      };
    default:
      return state;
  }
};