import { Map, fromJS } from "immutable";
import { FETCH_PROFILE_SUCCESS } from "./actions";

export default function Profile(state = Map(), action) {
  switch (action.type) {
    case FETCH_PROFILE_SUCCESS:
      return fromJS(action.data);
    default:
      return state;
  }
}
