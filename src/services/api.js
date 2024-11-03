import axios from "axios";

const BASE_URL = "";

const axiosInstance = axios.create({ baseURL: BASE_URL });

export default axiosInstance;

axiosInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
  return req;
});
