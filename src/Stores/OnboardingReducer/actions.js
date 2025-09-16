import { adharBackApi, adharFrontApi } from '../API\'s/authApi';
import { GetUserTypes } from '../authReducer/authActionType';
import { 
    SET_DOB,
    SET_YEAR, 
    SET_WORKING, 
    SET_FRONT_ADHAR,
    SET_BACK_ADHAR,
    ACCEPTANCE,
    HEALTH_STATE,
    APPLY_SCHOLARSHIP, 
}  from './actionTypes';

export const setDobAction = (dob) => ({
    type: SET_DOB,
    payload: dob
});

export const setYearAction = (year) => ({
    type: SET_YEAR,
    payload: year
});

export const setWorkingAction = (working) => ({
    type: SET_WORKING,
    payload: working
});


export const setFrontAdharAction = (token,frontAdhar) => async (dispatch) => {
  try {
    console.log("Action.js",frontAdhar);
      let res = await adharFrontApi(token, frontAdhar);
      console.log(res);
      dispatch({
        type: SET_FRONT_ADHAR,
        payload: res.data,
      });
    } catch (err) {
      console.error("API Error:", err.response ? err.response.data : err.message);
      dispatch({ type: GetUserTypes.GET_ERROR });
    }
};


export const setBackAdharAction = (token,backAdhar) => async (dispatch) => {
    try {
      let res = await adharBackApi(token, backAdhar);
      console.log('adharBackApi:', res)
      dispatch({
        type: SET_BACK_ADHAR,
        payload: res.data,
      });
    } catch (err) {
      console.error("API Error:", err.response ? err.response.data : err.message);
      dispatch({ type: GetUserTypes.GET_ERROR });
    }
};


export const acceptanceAction = (acceptance) => ({
    type: ACCEPTANCE,
    payload: acceptance
});

export const healthStateAction = (healthState) => ({
    type: HEALTH_STATE,
    payload: healthState
});


export const applyScholarshipAction = (applyScholarship) => ({
    type: APPLY_SCHOLARSHIP,
    payload: applyScholarship
});

