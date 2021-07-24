import axios from 'axios';
const url = "http://localhost:5000/user/auth";

const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

export const signUp = (formData) =>{
    return axios.post(`${url}/register`, formData,config);
    
};

export const signIn = (formData) =>{
    return axios.post(`${url}/login`, formData,config);
};

