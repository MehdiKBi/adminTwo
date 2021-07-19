import axios from "axios";
import { Dispatch } from "redux";
import {
  GET_CORPORATE_ERROR,
  corporatesDispatchTypes,
  GET_CORPORATE,
  ADD_CORPORATE,
  DELETE_CORPORATE,
  UPDATE_CORPORATE,
  SEARCH_CORPORATE,
} from "../Types/corporateTypes";

//GET CORPORATES
export const getcorporateData =
  (skip: any) => async (dispatch: Dispatch<corporatesDispatchTypes>) => {
    const fulUrl = "https://api.corplife.at/v0/corporates";
    const params = {
      limit: 8,
      skip: skip,
    };
    try {
      const response = await axios.get(fulUrl, { params });
      dispatch({
        type: GET_CORPORATE,
        payload: response.data.data,
      });
    } catch (e) {
      console.log("redux Error", e);
      dispatch({
        type: GET_CORPORATE_ERROR,
        payload: "get-corporate",
      });
    }
  };

//UPDATE CORPORATES
export const updateCorporateAction =
  (id: any) => async (dispatch: Dispatch<corporatesDispatchTypes>) => {
    const Url = "";
    try {
      const response = await axios.put(Url);
      console.log(response);
      dispatch({
        type: UPDATE_CORPORATE,
        payload: "updated_corporate",
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: GET_CORPORATE_ERROR,
        payload: "err",
      });
    }
  };

//POST NEW CORPORATE
export const addcorporateAction =
  (id: any) => async (dispatch: Dispatch<corporatesDispatchTypes>) => {
    const addingUrl = "https://api.corplife.at/v0/corporates";
    try {
      const response = await axios.post(addingUrl);
      console.log(response);
      dispatch({
        type: ADD_CORPORATE,
        payload: "post-corporate",
      });
    } catch (e) {
      dispatch({
        type: GET_CORPORATE_ERROR,
        payload: "add_corporate",
      });
    }
  };

//DELETE CORPORATE
export const deleteCorporateAction =
  (id?: any) => async (dispatch: Dispatch<corporatesDispatchTypes>) => {
    try {
      const response = await axios.delete(
        `https://api.corplife.at/v0/corporates/${id}`
      );
      dispatch({
        type: DELETE_CORPORATE,
        payload: "delete_corporate",
      });
      console.log(response);
    } catch (e) {
      dispatch({
        type: GET_CORPORATE_ERROR,
        payload: "error",
      });
      console.log("", e);
    }
  };

//SEARCH CORPORATES
export const searchCorporateAction =
  (search: string) => async (dispatch: Dispatch<corporatesDispatchTypes>) => {
    const params = {
      search: search,
      getAll: 1,
    };
    try {
      const response = await axios.get(
        "https://api.corplife.at/v0/corporates",
        { params }
      );
      dispatch({
        type: SEARCH_CORPORATE,
        payload: response.data,
      });
    } catch (e) {
      console.log("error to search", e);
    }
  };
