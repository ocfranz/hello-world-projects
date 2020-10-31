import { toggleModalLogin } from "./uiTypes";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

const requestLogin = () => {
  return { type: LOGIN_REQUEST };
};
const receiveLogin = (userId) => {
  return { type: LOGIN_SUCCESS, payload: userId };
};
const errorLogin = (message) => {
  return { type: LOGIN_FAILURE, errorMessage: message };
};

export const loginUser = (creds) => {
  return (dispatch) => {
    dispatch(requestLogin());
    // do axios
    setTimeout(() => {
      dispatch(receiveLogin("SampleId"));
      dispatch(toggleModalLogin(false));
    }, 1500);
  };
};
