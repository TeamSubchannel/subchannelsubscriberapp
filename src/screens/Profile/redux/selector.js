import { createStructuredSelector } from "reselect";
import { isLoading } from "../../../redux_util";
import { Map } from "immutable";

export const profileLoading = state => isLoading(state, "fetchProfile");
export const profileData = createStructuredSelector({
  email: state => state.getIn(["Profile", "email"], ""),
  loading: profileLoading
});
