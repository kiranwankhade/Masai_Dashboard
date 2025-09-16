import {
  Is_APP_LOADING,
  IS_APP_ERROR,
  IS_APP_SUCCESS,
  FETCH_COURSE_DATA_REQUEST,
  FETCH_COURSE_DETAIL_DATA,
  PROFILE_SUCCESS,
  PROFILE_UPDATE,
  CourseLoading,
  EVENT_REG_SUCUSS,
} from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  Alumnidata: [],
  userData: {},
  courseData: [],
  selectedCourseReq: false,
  selectedCourse: [],
  eventsRegistered: []
};

export const appReducer = (state = initState, { type, payload }) => {

  switch (type) {
    case FETCH_COURSE_DATA_REQUEST:
      return {
        ...state,
        selectedCourseReq: false,
        courseData: payload,
      };
    case CourseLoading:
      return {
        ...state,
        selectedCourseReq: true
      };
    case FETCH_COURSE_DETAIL_DATA:
      console.log("payload", payload)
      return {
        ...state,
        selectedCourseReq: false,
        selectedCourse: payload, // Update the selectedCourse with the payload
      };
    case Is_APP_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case IS_APP_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case IS_APP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        Alumnidata: payload,
      };
    }
    case PROFILE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        userData: payload,
      };
    }
    case PROFILE_UPDATE: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        userData: payload,
      };
    }
    case EVENT_REG_SUCUSS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        eventsRegistered: payload,
      };
    }
    default:
      return state;
  }
};