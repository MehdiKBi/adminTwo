import { errorPageDispatch, ERROR_PAGE } from "../Types/error";

interface defaultState {
  error: boolean;
}

const initialState: defaultState = {
  error: false,
};

export const errorReducer = (
  state: defaultState = initialState,
  action: errorPageDispatch
) => {
  switch (action.payload) {
    case ERROR_PAGE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
