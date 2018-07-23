import { client } from "../../../ajax";
import formatError from "../../../formatErrors";
import {
  sendingRequest,
  receivedResponse,
  createAction
} from "../../../redux_util";

export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";

export const fetchProfileSuccess = createAction(FETCH_PROFILE_SUCCESS, "data");

export const fetchProfile = () => {
  return dispatch => {
    dispatch(sendingRequest("fetchProfile"));
    return client
      .get(`api/subscriber`)
      .then(res => {
        dispatch(receivedResponse("fetchProfile"));
        return dispatch(fetchProfileSuccess(res.data));
      })
      .catch(err =>
        dispatch(receivedResponse("fetchProfile", formatError(err), "ERROR"))
      );
  };
};

// UPDATE PROFILE
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const updateProfileSuccess = createAction(
  UPDATE_PROFILE_SUCCESS,
  "data"
);

export const updateProfile = data => {
  return dispatch => {
    dispatch(sendingRequest("updateProfile"));
    return client
      .put("/api/profile", data)
      .then(res => {
        dispatch(
          receivedResponse("updateProfile", { message: "Saved!" }, "MESSAGE")
        );

        return dispatch(updateProfileSuccess(res.data));
      })
      .catch(err =>
        dispatch(receivedResponse("updateProfile", formatError(err), "ERROR"))
      );
  };
};

// DELETE PROFILE
export const DELETE_PROFILE_SUCCESS = "DELETE_PROFILE_SUCCESS";
export const deleteProfileSuccess = createAction(
  DELETE_PROFILE_SUCCESS,
  "data"
);

export const deleteProfile = data => {
  return dispatch => {
    dispatch(sendingRequest("deleteProfile"));
    return client
      .post("/api/profile/delete", data)
      .then(res => {
        dispatch(receivedResponse("deleteProfile"));
        return dispatch(deleteProfileSuccess(res.data));
      })
      .catch(err =>
        dispatch(receivedResponse("deleteProfile", formatError(err)))
      );
  };
};

// Change password
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const changePasswordSuccess = createAction(
  CHANGE_PASSWORD_SUCCESS,
  "data"
);

export const changePassword = data => {
  return dispatch => {
    dispatch(sendingRequest("changePassword"));
    return client
      .post("/api/password/update", data)
      .then(res => {
        dispatch(receivedResponse("changePassword"));
        return dispatch(changePasswordSuccess(res.data));
      })
      .catch(err =>
        dispatch(receivedResponse("changePassword", formatError(err)))
      );
  };
};
