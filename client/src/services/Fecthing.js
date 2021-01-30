import axios from 'axios';
import { SERVER_URL } from '../config';

export const getToken=async (userLogin)=>{
   let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    };
   return await axios.post(SERVER_URL+"/api/login", userLogin,axiosConfig);
}

export const getData= async (token,endpoint)=>{
    let config = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization':`Bearer ${token}`
        }
        
    };
        
    return await axios.get(SERVER_URL+endpoint,config);
}


export const postData=async (token,endpoint,data)=>{
    let config = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization':`Bearer ${token}`
        }
        
    };
    window.alert("================endpoint=============== : "+ (SERVER_URL+endpoint));
    //window.alert("================data=============== : "+ data);
    return await axios.post(SERVER_URL+endpoint, data,config);
}