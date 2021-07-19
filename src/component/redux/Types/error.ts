export const ERROR_PAGE = "ERROR_PAGE";


export interface errorpageSu{
  type: typeof ERROR_PAGE;
  payload: any
}

export type errorPageDispatch = errorpageSu;
