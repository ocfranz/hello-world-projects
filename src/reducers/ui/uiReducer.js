import {
  UPDATE_FILTER,
  TOGGLE_LOGIN_MODAL,
} from "../../constants";

const initialStateUi = {
  filter: "all",
  visibleLoginModal: false,
  visibleCheckoutModal: false,
};

export const uiReducer = (state = initialStateUi, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return { ...state, filter: action.payload };
    case TOGGLE_LOGIN_MODAL:
      return { ...state, visibleLoginModal: action.payload };
    default:
      return state;
  }
};
