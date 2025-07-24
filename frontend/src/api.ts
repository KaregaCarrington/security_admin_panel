import axios from "axios";
import { User } from "./types";

const API_BASE = "http://localhost:8000/api";

export const getLogins = async () => {
  const response = await axios.get(`${API_BASE}/logins`);
  return response.data;
}

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${API_BASE}/users`);
  return response.data;
}

export const deleteUser = async (userId: number) => {
  const response = await axios.delete(`${API_BASE}/users/${userId}`);
  alert(response.data.message);
}

export const createUser = async (user: Omit<User, "id">) => {
  const res = await axios.post(`${API_BASE}/users`, user);
  return res.data;
};

export const updateUser = async (id: number, user: Omit<User, "id">) => {
  const res = await axios.put(`${API_BASE}/users/${id}`, user);
  return res.data;
};
