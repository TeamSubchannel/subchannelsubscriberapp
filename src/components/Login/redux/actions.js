import client, { rawClient } from "./../../../ajax";
import {
  sendingRequest,
  receivedResponse,
  createAction
} from "./../../../redux_util";
import formatError from "../../../formatErrors";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

export const userLoginSuccess = createAction(
  USER_LOGIN_SUCCESS,
  "authToken",
  "appUser",
  "message"
);
export const userLogin = data => {
  console.log(data);

  return dispatch => {
    dispatch(sendingRequest("userLogin"));
    return client
      .post(`/api/login/${data.channelName}`, data)
      .then(res => {
        dispatch(receivedResponse("userLogin"));
        return dispatch(
          userLoginSuccess(
            res.headers["authorization"] || "",
            res.data,
            "Login Successful"
          )
        );
      })
      .catch(err => {
        return dispatch(receivedResponse("userLogin", formatError(err)));
      });
  };
};
