import { client, rawClient } from "../../../ajax";
import formatError from "../../../formatErrors";
import {
  sendingRequest,
  receivedResponse,
  createAction
} from "../../../redux_util";

export const SIGNUP_SUBSCRIBER_SUCCESS = "SIGNUP_SUBSCRIBER_SUCCESS";

export const signupSubscriberSuccess = createAction(
  SIGNUP_SUBSCRIBER_SUCCESS,
  "authToken",
  "data"
);

export const signupSubscriber = data => {
  return dispatch => {
    dispatch(sendingRequest("signupSubscriber"));
    return client
      .post(`api/signup/${data.channelName}`, data)
      .then(res => {
        dispatch(receivedResponse("signupSubscriber"));
        return dispatch(
          signupSubscriberSuccess(
            res.headers["authorization"] || "",
            res.data,
            "Signup Successful"
          )
        );
      })
      .catch(err =>
        dispatch(receivedResponse("signupSubscriber", formatError(err)))
      );
  };
};

export const VERIFICATION_EMAIL_CHECK_SUCCESS =
  "VERIFICATION_EMAIL_CHECK_SUCCESS";

export const verificationEmailCheckSuccess = createAction(
  VERIFICATION_EMAIL_CHECK_SUCCESS,
  "appUser",
  "message"
);

export const verificationEmailCheck = data => {
  console.log(data);

  return dispatch => {
    dispatch(sendingRequest("verificationEmailCheck"));
    return rawClient
      .get(`/api/verifyemail/${data.channelName}/${data.email}`)
      .then(res => {
        receivedResponse("verificationEmailCheck");
        return dispatch(
          verificationEmailCheckSuccess(
            res.data,
            "Email Verification Successful"
          )
        );
      })
      .catch(err =>
        dispatch(receivedResponse("verificationEmailCheck", formatError(err)))
      );
  };
};
