import { combineReducers } from "redux-immutable";
import Profile from "./screens/Profile/redux/reducer";
// import { httpReducer as http, Messages } from "./redux_util";
import { routerReducer } from "react-router-redux";

const appReducer = combineReducers({
  Profile,
  Router: routerReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
