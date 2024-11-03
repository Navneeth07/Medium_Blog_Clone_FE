import axios from "./apiConfig";
import { API_ENDPOINTS } from "../constants/apiEndpoints";

export const AuthDetails = async (payload) => {
  try {
    const response = await axios.post(API_ENDPOINTS.AUTH.signup, payload);
    if (response) {
      return response;
    }
  } catch (error) {
    return error?.response;
  }
};
