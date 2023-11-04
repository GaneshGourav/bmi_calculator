import axios from 'axios'
import { LOGIN_PENDING, SIGNUP_PENDING, SIGNUP_SUCCESS } from './ActionType'

export const userSignup=(user)=>(dispatch)=>{
    dispatch({type:SIGNUP_PENDING})
    return axios.post('http://localhost:4000/users/signup',user)
    // .then((res)=>{
    //     dispatch({type:SIGNUP_SUCCESS,payload:res.data})
    //     console.log(res.data)
    //   })
    //   .catch((err)=>{
    //     dispatch({type:SIGNUP_ERROR})
    //   })
      
}

export const userLogin=(data)=>(dispatch)=>{
    dispatch({type:LOGIN_PENDING})
    return axios.post('http://localhost:4000/users/login',data)
}