export const UPDATE_FILTER = "UPDATE_FILTER";
export const TOGGLE_LOGIN_MODAL = "TOGGLE_LOGIN_MODAL";
export const TOGGLE_CHECKOUT_MODAL = "TOGGLE_CHECKOUT_MODAL";

export const toggleModalLogin = (visible) => {
  return (dispatch) => {
    return dispatch({ type: TOGGLE_LOGIN_MODAL, payload: visible });
  };
};
