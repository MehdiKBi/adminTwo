export const GET_CORPORATE = "GET_CORPORATE";
export const GET_CORPORATE_ERROR = "GET_CORPORATE_ERROR";
export const CORPORATE_LOADING = "CORPORATE_LOADING";
export const ADD_CORPORATE = "ADD_CORPORATE";
export const DELETE_CORPORATE = "DELETE_CORPORATE";
export const UPDATE_CORPORATE = "UPDATE_CORPORATE";
export const SEARCH_CORPORATE = "SEARRCH_CORPORATE";

export interface corporateSuccss {
  type: typeof GET_CORPORATE;
  payload: any;
}

export interface addingCorporate {
  type: typeof ADD_CORPORATE;
  payload: any;
}

export interface updateCoporate {
  type: typeof UPDATE_CORPORATE;
  payload: any;
}

export interface corporateLoading {
  type: typeof CORPORATE_LOADING;
  payload: any;
}

export interface corporateError {
  type: typeof GET_CORPORATE_ERROR;
  payload: any;
}

export interface deleteCorporate {
  type: typeof DELETE_CORPORATE;
  payload: any;
}

export interface searchCorporate {
  type: typeof SEARCH_CORPORATE;
  payload: any;
}

export type corporatesDispatchTypes =
  | corporateSuccss
  | corporateLoading
  | corporateError
  | addingCorporate
  | deleteCorporate
  | updateCoporate
  | searchCorporate;
