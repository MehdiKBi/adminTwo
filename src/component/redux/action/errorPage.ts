import { ERROR_PAGE } from "../Types/error"



export const errorPageAction = (toggle:boolean) => {
  return {
    type: ERROR_PAGE,
    toggle: false 
  }
}