import { createStructuredSelector } from "reselect";
import { isLoading } from "../../../redux_util";

export const profileLoading = state => isLoading(state, "fetchProfile");
export const profileData = createStructuredSelector({
  email: state => state.getIn(["Profile", "email"], ""),
  loading: profileLoading
});
