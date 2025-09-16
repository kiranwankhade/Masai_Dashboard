import { APPLY_COURSE_ERROR,APPLY_COURSE_REQUEST,APPLY_COURSE_SUCCESS } from "./actionType";

const initialState={
    loading:false,
    course:[],
    error:false
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case APPLY_COURSE_REQUEST:
        return { ...state, loading: true, error: null };
  
      case APPLY_COURSE_SUCCESS:
        return { ...state, loading: false, course: action.payload, error: null };
  
      case APPLY_COURSE_ERROR:
        return { ...state, loading: false, course: [], error: action.error };
  
      default:
        return state;
    }
  };

    