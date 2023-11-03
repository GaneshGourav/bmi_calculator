import axios from 'axios'
import { SIGNUP_PENDING } from './ActionType'

export const userSignup=(user)=>(dispatch)=>{
    dispatch({type:SIGNUP_PENDING})
    return axios.post('localhost:4000/users/signup',user)
}