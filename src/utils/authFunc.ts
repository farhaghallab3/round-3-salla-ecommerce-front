import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

// sign up functionality
export const signUp = async (
  name: string,
  email: string,
  password: string,
  password_confirmation: string
) => {
  try {
    const response = await axios.post(`${API}/register`, {
      name,
      email,
      password,
      password_confirmation,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error ?? { message: "An error occurred" };
  }
};

// sign in functionality
export const signIn = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error ?? { message: "An error occurred" };
  }
};

// save token in local storage
export const saveToken = (token: {
  access_token: string;
  token_type: string;
}) => localStorage.setItem("token", JSON.stringify(token));

// save user in local storage
export const saveUser = (user: { id: number; name: string; email: string }) =>
  localStorage.setItem("user", JSON.stringify(user));
