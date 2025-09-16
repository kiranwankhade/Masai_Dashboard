import axios from "axios";
import {
  APPLY_COURSE_REQUEST,
  APPLY_COURSE_SUCCESS,
  APPLY_COURSE_ERROR,
  MSAT_REGISTER,
} from "../courseReducer/actionType";

const baseURL = "https://agreeable-calf-coat.cyclic.cloud";

const msatRegisterAction = () => ({ type: MSAT_REGISTER });

export const applyCourse = (token, userId) => async (dispatch) => {
  console.log("userId", userId);
  const test_platform_assessment_id = "64ef03a00bf0f105e8c8253e";
  const ORIGIN = "https://agreeable-calf-coat.cyclic.cloud/application";
  const unique_id = userId;
  const endpoint = `${process.env.REACT_APP_ASSESMENT_API_BASE_URL}/student/assessments/generate-test`;
  const headers = {
    "content-type": "application/json",
    "client-id": process.env.REACT_APP_ASSESMENT_PLATFROM_CLIENT_ID,
  };
  // body/payload
  const data = {
    uniqueID: unique_id, // eg: unique userId or slug
    assessmentTemplateId: test_platform_assessment_id, // id of assessment template created on https://assess-admin-test.masaischool.com under your client
    redirectClientUrl: "http://localhost:3000/msat-result", // its the url where you want the user to be refirected from assess after user finishes the test.
    email: "debobrota@gmail.com", // user email
    callback_url: ORIGIN + "/v2/profile-assessment/test-platform-callback", // this is the callback url where you want assess backend to send data(result, test status) related to user test submission, here ORIGIN is your backend domain
  };
  return axios.post(endpoint, data, {
    headers: headers,
  });

  // console.log("courseAction", course);
};

export const msatRegister = (token) => (dispatch) => {
  axios
    .get(`${baseURL}/application/start`, {
      headers: {
        authorization: `Bearer ${token} `,
      },
    })
    .then((res) => {
      console.log("msat registered", res);
      dispatch(msatRegisterAction());
    })
    .catch((err) => {
      console.log("err while msat register", err);
    });
};

const getAppliedCourseAction = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`${baseURL}/course-applied`, userId, {
      headers: {
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    dispatch({ type: APPLY_COURSE_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: APPLY_COURSE_ERROR, error: err.message });
  }
};
