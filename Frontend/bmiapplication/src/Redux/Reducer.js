import {
  BMI_ERROR,
  BMI_HISTORY,
  BMI_HISTORY_SUCCESS,
  BMI_PENDING,
  BMI_SUCCESS,
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
  bmi:""

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
    case BMI_PENDING:{
      return {...state,isLoading:true,isError:false}
    }
    case BMI_SUCCESS:{
      return {...state,isLoading:false,bmi:payload.data,isError:false}
    }
    case BMI_ERROR:{
      return {...state,isLoading:false,isError:false}
    }

    case BMI_HISTORY_SUCCESS:{
      return {...state,isLoading:false,isError:false}
    }
    default :return state
  }
};
