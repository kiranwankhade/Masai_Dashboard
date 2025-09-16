import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import { combineReducers } from "redux";
import { authReducer } from "./authReducer/authReducer";
import { appReducer } from "./appReducer/reducer";
import { eventReducer } from "./eventReducer/reducer";
import { reducer } from "./courseReducer/reducer";
import { erReducer } from "./ErReducer/erReducer";
import { geterReducer } from "./ErReducer/erReducer";
import { onboardingReducer } from "./OnboardingReducer/actionReducer";
import { radioReducer } from "./MSATReducer/msatReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  appReducer: appReducer,
  authReducer: authReducer,
  eventReducer: eventReducer,
  reducer: reducer,
  erReducer: erReducer,
  geterReducer: geterReducer,
  onboardingReducer: onboardingReducer,
  radio: radioReducer,
}); //

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
