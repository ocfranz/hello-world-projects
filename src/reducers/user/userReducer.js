import { LOGIN_USER } from "../../actions/user";

const initialStateUi = {
  username: "",
  auth: false,
  userId: "",
};

export const userReducer = (state = initialStateUi, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};
