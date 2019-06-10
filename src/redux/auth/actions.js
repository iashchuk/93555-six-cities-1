import * as types from "./types";
import { history } from "../index.js";
import { parseAuthData } from "../../helpers/parse-auth-data.js";

export const loginAsync = (email, password) => (dispatch, _getState, api) => {
  return api
    .post(`/login`, { email, password })
    .then((response) => {
      if (response.data) {
        history.push(`/`);
        dispatch(login(response.data));
      }
    })
    .catch((error) => {
      if (error.response.status) {
        if (error.response.status === 400) {
          dispatch(setAuthError(error.response.data.error));
        }
      }
    });
};

export const checkLoginAsync = () => {
  return (dispatch, _getState, api) => {
    return api
      .get(`/login`)
      .then((response) => {
        if (response.data) {
          dispatch(login(response.data));
        }
      })
      .catch((error) => {
        if (error.response.status) {
          if (error.response.status === 403) {
            dispatch(setAuthError(error.response.data.error));
          }
        }
      });
  };
};

export const login = (authData) => {
  const credentials = parseAuthData(authData);
  return {
    type: types.LOGIN,
    payload: credentials
  };
};

export const setAuthError = (error) => {
  return {
    type: types.SET_AUTH_ERROR,
    payload: error
  };
};
