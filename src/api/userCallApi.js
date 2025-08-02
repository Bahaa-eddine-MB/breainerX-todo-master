import api from "../lib/axiosApi";

export async function signIn(params) {
  try {
    const response = await api.post(
      `/users/sign-in`,
      params
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "An error occurred";
  }
}
