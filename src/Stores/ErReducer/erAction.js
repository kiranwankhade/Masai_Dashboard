import axios from 'axios';
 import { POST_EVENT_REGISTER_REQUEST,POST_EVENT_REGISTER_SUCCESS,POST_EVENT_REGISTER_ERROR } from './erActiontype';
 import {GET_EVENT_REGISTER_REQUEST,GET_EVENT_REGISTER_SUCCESS,GET_EVENT_REGISTER_ERROR}  from './erActiontype'

 export const postEventRegister = (eventId, token) => async (dispatch) => {
  dispatch({ type: POST_EVENT_REGISTER_REQUEST });
  try {
    const response = await axios.post(
      'https://agreeable-calf-coat.cyclic.cloud/event-register',
      { eventId },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: POST_EVENT_REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: POST_EVENT_REGISTER_ERROR,
      error: error.message,
    });
  }
};


export const getEventRegister = (token) => async (dispatch) => {
  dispatch({ type: GET_EVENT_REGISTER_REQUEST });
  try {
    const response = await axios.get(
      'https://agreeable-calf-coat.cyclic.cloud/event-register',
     
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: GET_EVENT_REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_EVENT_REGISTER_ERROR,
      error: error.message,
    });
  }
};