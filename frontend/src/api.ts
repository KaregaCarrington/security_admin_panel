import axios from "axios";

const API_BASE = "http://localhost:8000/api";

export const getLogins = async () => {
  const response = await axios.get(`${API_BASE}/logins`);
  return response.data;
}