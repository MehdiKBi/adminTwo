import {
  checklistDipatch,
  CHECKLIST_LOADING,
  GET_CHECKLIST,
  GET_CHECKLIST_ERROR,
  ADD_CHECKLIST,
  DELETE_CHECKLIST,
  UPDATE_CHECKLIST,
} from "../Types/checklistTypes";

interface defaultState {
  checklist?: any;
  error: string;
  loading: boolean;
  list: any;
}
const initialState: defaultState = {
  checklist: [],
  error: "",
  loading: true,
  list: [],
};

export const checklistReducer = (
  state: defaultState = initialState,
  action: checklistDipatch
) => {
  switch (action.type) {
    case GET_CHECKLIST:
      return {
        ...state,
        checklist: action.payload,
        loading: false,
      };
    case ADD_CHECKLIST:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case UPDATE_CHECKLIST:
      return {
        ...state,
        chceklist : action.payload
      }
    case GET_CHECKLIST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: true,
      };
    case CHECKLIST_LOADING:
      return {
        ...state,
        error: action.payload,
        loading: true,
      };
    case DELETE_CHECKLIST:
      return {
        ...state,
        checklist: action.payload
      };
    default:
      return state;
  }
};
