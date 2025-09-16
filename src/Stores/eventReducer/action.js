import * as Types from "./actionType";
import axios from "axios";

export const getEventAction = (payload) => ({
  type: Types.GET_EVENT, payload
});
export const loadingEventAction = () => ({
  type: Types.LOADING_EVENT,
});
export const errorEventAction = () => ({
  type: Types.ERROR_EVENT,
});
export const getSingleEventAction = () => ({
  type: Types.GET_SINGLE_EVENT,
});
export const loadingSingleEventAction = () => ({
  type: Types.LOADING_SINGLE_EVENT,
});
export const errorSingleEventAction = () => ({
  type: Types.ERROR_SINGLE_EVENT,
});

export const getEvents = (token) => async (dispatch) => {
  dispatch(loadingEventAction());
  try {
    let user = await axios.get(
      `https://agreeable-calf-coat.cyclic.cloud/event`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(user.data);
    dispatch(getEventAction(user.data.events));
  } catch (e) {
    console.log(e);
    dispatch(errorEventAction());
  }
};
