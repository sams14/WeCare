import * as api from "../api/api";

export const signUp = async (formData, history) => {
  try {
    const { data } = await api.signUp(formData);
    console.log("signup", data);
    localStorage.setItem("profile", JSON.stringify({ data }));
    history.push("/");
  } 
  catch (error) {
    console.log(error,error.statusCode);
    if (error.statusCode == 304) {
    console.log("success");
      signIn(formData, history);
    }
    else
    history.push("/register");
  }
};

export const signIn = async (formData, history) => {
  try {
    const { data } = await api.signIn(formData);
    console.log("signin", data);
    localStorage.setItem("profile", JSON.stringify({ data }));
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};
