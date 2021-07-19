import axios from "axios";
import { Dispatch } from "redux";
import {
  ADD_CHECKLIST,
  checklistDipatch,
  DELETE_CHECKLIST,
  GET_CHECKLIST,
  GET_CHECKLIST_ERROR,
  UPDATE_CHECKLIST,
} from "../Types/checklistTypes";

//GET CHECKLIST DATA
export const checklistAction =
  (skip: number) => async (dispatch: Dispatch<checklistDipatch>) => {
    const params = {
      limit: 8,
      skip: skip,
    };
    const fullUrl = "https://api-dev.corplife.at/v0/corplife/checklists";
    try {
      const response = await axios.get(fullUrl, { params });
      dispatch({
        type: GET_CHECKLIST,
        payload: response.data.data,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: GET_CHECKLIST_ERROR,
        payload: "get_checklist",
        loading: true,
      });
    }
  };


    // UPDATE CHECKLIST
    export const updateChecklistAction =
    (id: any) => async (dispatch: Dispatch<checklistDipatch>) => {
      const Url = "";
      try {
        const response = await axios.put(Url);
        console.log(response);
        dispatch({
          type: UPDATE_CHECKLIST,
          payload:"update-checklist",
        });
      } catch (e) {
        dispatch({
          type: GET_CHECKLIST_ERROR,
          payload: "checklist-error",
        });
      }
    };


//ADD CHECKLIST
export const addChecklistAction =
  (id: any) => async (dispatch: Dispatch<checklistDipatch>) => {
    const Url = "";
    try {
      const response = axios.post(Url);
      console.log(response);
      dispatch({
        type: ADD_CHECKLIST,
        payload:"post-checklist",
      });
    } catch (e) {
      dispatch({
        type: GET_CHECKLIST_ERROR,
        payload: "checklist-error",
      });
    }
  };

  //DELETE CHECKLIST
  export const deleteChecklistAction =
  (id: any) => async (dispatch: Dispatch<checklistDipatch>) => {
    const Url = "";
    try {
      const response = axios.post(Url);
      console.log(response);
      dispatch({
        type: DELETE_CHECKLIST,
        payload:"delete-checklist",
      });
    } catch (e) {
      dispatch({
        type: GET_CHECKLIST_ERROR,
        payload: "checklist-error",
      });
    }
  };
