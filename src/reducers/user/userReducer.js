import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../../actions/user";

const initialState = {
  username: "",
  userId: "",
  isFetching: false,
  isAuthenticated: false,
  errorMessage: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true };
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, isFetching: false };
    case LOGIN_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    default:
      return state;
  }
};
