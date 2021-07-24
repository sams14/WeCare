import * as api from "../api/api";

export const signUp =async (formData)=>{
    try {
        const {data} = await api.signUp(formData);
        console.log("signup",data);

    } catch (error) {
        console.log(error.message);
    }
}

export const signIn =async (formData)=>{
    try {
        const {data} = await api.signIn(formData);
        console.log("signin",data);
    } catch (error) {
        console.log(error.message);
        
    }
}