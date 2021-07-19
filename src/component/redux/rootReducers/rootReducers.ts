import { combineReducers } from "redux";
import { checklistReducer } from "../reducers/checklistReducer";
import { errorReducer } from "../reducers/errorReducer";
import { corporatReducer } from "../reducers/corporateReducer";
// import { searchReducer } from "../reducers/searchCorporateReducer";


export const rootReducer = combineReducers({
  // searchmachine :  searchReducer,
  corporate: corporatReducer,
  checklist: checklistReducer,
  error: errorReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
