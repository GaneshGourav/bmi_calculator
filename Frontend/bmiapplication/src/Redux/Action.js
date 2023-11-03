import axios from 'axios'
import { LOGIN_PENDING, SIGNUP_PENDING } from './ActionType'

export const userSignup=(user)=>(dispatch)=>{
    dispatch({type:SIGNUP_PENDING})
    return axios.post('localhost:4000/users/signup',user)
}

export const userLogin=(data)=>(dispatch)=>{
    dispatch({type:LOGIN_PENDING})
    return axios.post('localhost:4000/users/login',data)
}