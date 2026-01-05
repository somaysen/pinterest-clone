import api from "@/config/axios";

export const login = async (data: FormData) => {
  const response = await api.post("/auth/login", data);
  return response.data;
}