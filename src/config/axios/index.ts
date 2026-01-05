import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Vite / normal React
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

/**
 * RESPONSE INTERCEPTOR
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      "Something went wrong";

    // 🔐 Unauthorized / Session expired
    if (status === 401 || status === 403) {
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");

      // Redirect to login
      window.location.href = "/login";
    }

    return Promise.reject(new Error(message));
  }
);

export default api;
