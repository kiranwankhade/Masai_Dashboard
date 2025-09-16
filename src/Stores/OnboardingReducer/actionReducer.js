import {
  SET_DOB,
  SET_YEAR,
  SET_WORKING,
  SET_FRONT_ADHAR,
  SET_BACK_ADHAR,
  ACCEPTANCE,
  HEALTH_STATE,
  APPLY_SCHOLARSHIP,
} from "./actionTypes";

const initialState = {
  dob: "",
  year: "",
  working: "",
  frontAdhar: {},
  backAdhar: null,
  acceptance: true,
  healthState: true,
  applyScholarship: true,
};

export const onboardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOB:
      return { ...state, dob: action.payload };

    case SET_YEAR:
      return { ...state, year: action.payload };

    case SET_WORKING:
      return { ...state, working: action.payload };

    case SET_FRONT_ADHAR:
      return { ...state, frontAdhar: action.payload };

    case SET_BACK_ADHAR:
      return { ...state, backAdhar: action.payload };

    case ACCEPTANCE:
      return { ...state, acceptance: action.payload };

    case HEALTH_STATE:
      return { ...state, healthState: action.payload };

    case APPLY_SCHOLARSHIP:
      return { ...state, applyScholarship: action.payload };

    default:
      return state;
  }
};

export default onboardingReducer;
