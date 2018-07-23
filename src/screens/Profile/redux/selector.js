import { createStructuredSelector } from "reselect";
import { isLoading } from "../../../redux_util";
import { Map } from "immutable";

export const userDetails = state => state.getIn(["Profile", "info"], Map());
export const profileLoading = state => isLoading(state, "fetchProfile");
export const profileData = createStructuredSelector({
  userDetails,
  email: state => state.getIn(["Profile", "info", "email"], ""),
  loading: profileLoading
});
