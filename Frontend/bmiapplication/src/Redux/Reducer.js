import {
  LOGIN_ERROR,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
} from "./ActionType";

let initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  isError: false,
  token: "",
  userId: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_PENDING: {
      return { ...state, isLoading: true, isError: false };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
        userId: payload.userId,
      };
    }
    case LOGIN_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }

    case SIGNUP_PENDING: {
      return { ...state, isLoading: true, isError: false };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, isLoading: false, isError: false };
    }
    case SIGNUP_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    default :return state
  }
};
