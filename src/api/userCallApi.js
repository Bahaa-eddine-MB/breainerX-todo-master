import api from "../lib/axiosApi";

export async function signIn(params) {
  console.log(params);
  
  try {
    const response = await api.post(
      `/users/sign-in`,
      params
    );
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.log("Error signing in:", error);
    
    throw error.response?.data?.message || "An error occurred";
  }
}


export async function getCurrentUser() {
  try {
    const response = await api.get(`/users/profile`);
    return response.data;
  } catch (error) {
    console.error("Error fetching current user:", error);
    throw error.response?.data?.message || "An error occurred";
  }
}
