import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, CLEAR_ERRORS, } from "../constants/userConstants";
import axios from "axios";

// Login.
export const login = (email, password) =>async(dispatch)=>{
    try {
        dispatch({type:LOGIN_REQUEST});
        
        const config = {headers:{"Content-Type":"application/json"}};

        const {data}= await axios.post(`/api/v1/login`, 
        {email, password}, config);
    } catch (error) {
        dispatch({type:LOGIN_FAIL, payload:error.response.data.message});
    }
};