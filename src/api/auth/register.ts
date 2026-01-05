import api from "@/config/axios";

export const register = async (data: FormData) => {
  const response = await api.post("/auth/register", data);
  return response.data;
}