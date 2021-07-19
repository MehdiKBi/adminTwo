import {
  GET_CORPORATE,
  corporatesDispatchTypes,
  GET_CORPORATE_ERROR,
  CORPORATE_LOADING,
  ADD_CORPORATE,
  DELETE_CORPORATE,
  UPDATE_CORPORATE,
  SEARCH_CORPORATE,
} from "../Types/corporateTypes";

interface defaultState {
  corporate?: any;
  error?: string;
  loading: boolean;
  addcorporate?: any
  update : string
}

const initialState: defaultState = {
  corporate: [],
  error: "",
  loading: true,
  addcorporate: [],
  update: ""

};

export const corporatReducer = (
  state: defaultState = initialState,
  action: corporatesDispatchTypes
): defaultState => {
  switch (action.type) {
    case GET_CORPORATE:
      return {
        ...state,
        corporate: action.payload,
        loading:false
      };
    case SEARCH_CORPORATE:
      return {
        ...state,
        corporate: action.payload
      }
      case ADD_CORPORATE:
        return {
          ...state,
          addcorporate: action.payload,
          loading: false,
        }
    case UPDATE_CORPORATE:
      return {
        ...state,
        update : action.payload
      }
    case GET_CORPORATE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading:true
      };
    case CORPORATE_LOADING:
      return {
        ...state,
        error: action.payload,
        loading:true
      };
    case DELETE_CORPORATE:
      return {
        ...state,
        corporate:action.payload
      }
    default:
      return state;
  }
};
