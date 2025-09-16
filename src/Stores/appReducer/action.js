import axios from "axios";
import {
  Is_APP_LOADING,
  IS_APP_ERROR,
  IS_APP_SUCCESS,
  FETCH_COURSE_DATA_REQUEST,
  FETCH_COURSE_DETAIL_DATA,
  PROFILE_SUCCESS,
  CourseLoading,
  EVENT_REG_SUCUSS,
  PROFILE_UPDATE,
  PROFILE_UPDATE_ERROR,
  PROFILE_UPDATE_LOADING,
} from "./actionType";

const LoadingAction = () => ({ type: Is_APP_LOADING });
const errorAction = () => ({
  type: IS_APP_ERROR,
});
export const CourseAction = (data) => {
  return {
    type: FETCH_COURSE_DATA_REQUEST,
    payload: data,
  };
};
export const CourseDetailAction = (payload) => {
  return {
    type: FETCH_COURSE_DETAIL_DATA,
    payload,
  };
};

const successAction = (payload) => {
  return { type: IS_APP_SUCCESS, payload };
};
export const fetchCourseDataRequest = () => ({
  type: FETCH_COURSE_DATA_REQUEST,
});

const getProfile = (payload) => ({
  type: PROFILE_SUCCESS,
  payload,
});
export const getEventsRegisteredAction = (payload) => ({
  type: EVENT_REG_SUCUSS,
  payload,
});
export const updateUserProfileAction = () => ({ type: PROFILE_UPDATE });
export const loadingUserProfileAction = () => ({
  type: PROFILE_UPDATE_LOADING,
});
export const errorUserProfileAction = () => ({ type: PROFILE_UPDATE_ERROR });

export const getAlumni = (token) => (dispatch) => {
  dispatch(LoadingAction(dispatch));
  axios
    .get(`https://agreeable-calf-coat.cyclic.cloud/alumni-testimonials`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log("action ", res.data);
      dispatch(successAction(res.data.alumni));
    })
    .catch((err) => dispatch(errorAction()));
};
export const getUserProfile = (token) => (dispatch) => {
  dispatch(LoadingAction(dispatch));
  axios
    .get(`https://agreeable-calf-coat.cyclic.cloud/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log("profile action", res.data);
      dispatch(getProfile(res.data));
    })
    .catch((err) => dispatch(errorAction()));
};

export const reqCallbackAction = (payload, token, toast) => (dispatch) => {
  console.log("before update user profile", payload, token);
  // dispatch(loadingUserProfileAction());
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  axios
    .post(
      `https://agreeable-calf-coat.cyclic.cloud/request-callback`,
      payload,
      { headers }
    )
    .then((res) => {
      console.log("profile update action", res.data.message);
      dispatch(updateUserProfileAction());
      toast({
        title: `${res.data.message} Successfully updated!`,
        description: "We've recieved your callback request succfully!",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    })
    .catch((err) => {
      console.log("err", err);
      dispatch(errorUserProfileAction());
    });
};

export const fetchCourseData = (token) => {
  return (dispatch) => {
    dispatch({ type: CourseLoading });
    const headers = {
      authorization: `Bearer ${token}`,
    };
    axios
      .get(`https://agreeable-calf-coat.cyclic.cloud/course`, { headers })
      .then((res) => {
        // console.log(res.data.course);
        return dispatch(CourseAction(res.data.course));
      })
      .catch((err) => dispatch(errorAction()));
  };
};
export const selectCourseDetail = ({ courseId, token }) => {
  return (dispatch) => {
    dispatch({ type: CourseLoading });
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get(
        `https://agreeable-calf-coat.cyclic.cloud/course-details/${courseId}`,
        { headers }
      )
      .then((res) => {
        console.log("selected course action", res.data.course);
        return dispatch(CourseDetailAction(res.data.course));
      })
      .catch((err) => {
        console.log(err);
        dispatch(errorAction());
      });
  };
};
export const getEventsRegistered = (token) => (dispatch) => {
  dispatch(LoadingAction(dispatch));
  axios
    .get(`https://agreeable-calf-coat.cyclic.cloud/event-register`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(getEventsRegisteredAction(res.data));
    })
    .catch((err) => dispatch(errorAction()));
};
export const postEventsRegistered = (id, token) => (dispatch) => {
  // console.log(id, token);
  const newData = {
    eventId: id,
  };
  dispatch(LoadingAction(dispatch));
  axios
    .post(`https://agreeable-calf-coat.cyclic.cloud/event-register`, newData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log("event register", res.data);
      dispatch(getEventsRegisteredAction(res.data));
    })
    .catch((err) => dispatch(errorAction()));
};
