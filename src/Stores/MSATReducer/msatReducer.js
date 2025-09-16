import {
  GET_COURSE_ID,
  MSAT_RESULT,
  SET_SELECTED_COURSE,
} from "./msatActionType";

const initialState = {
  selectedCourse: "",
  courseID: "",
  msatResultData: {},
};

export const radioReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_COURSE:
      return {
        ...state,
        selectedCourse: payload,
      };

    case GET_COURSE_ID:
      return {
        ...state,
        courseID: payload,
      };
    case MSAT_RESULT: {
      return {
        ...state,
        msatResultData: payload,
      };
    }
    default:
      return state;
  }
};
