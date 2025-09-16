import axios from "axios";
import { courseAppliedGet } from "../API's/authApi";
import { GetUserTypes } from "../authReducer/authActionType";
import {
  GET_COURSE_ID,
  MSAT_RESULT,
  SET_SELECTED_COURSE,
} from "./msatActionType";

const baseURL = "https://agreeable-calf-coat.cyclic.cloud";

export const setSelectedCourse = (course) => ({
  type: SET_SELECTED_COURSE,
  payload: course,
});
export const msatResultAction = (payload) => ({ type: MSAT_RESULT, payload });

export const msatResult = (token) => (dispatch) => {
  axios
    .get(`${baseURL}/application/result`, {
      headers: {
        authorization: `Bearer ${token} `,
      },
    })
    .then((res) => {
      console.log("msat result action", res.data.result);
      dispatch(msatResultAction(res.data.result));
    })
    .catch((err) => {
      console.log("err while msat register", err);
    });
};

export const setCourseAppliedGetAction =
  (token, userID) => async (dispatch) => {
    try {
      let res = await courseAppliedGet(token, userID);
      console.log("resCourse:", res);
      // dispatch({
      //   type: GET_COURSE_ID,
      //   payload: res.data,
      // });
    } catch (err) {
      console.error(
        "API Error:",
        err.response ? err.response.data : err.message
      );
      dispatch({ type: GetUserTypes.GET_ERROR });
    }
  };
