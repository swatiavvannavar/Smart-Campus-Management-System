import instance from "../API/axios";

export const loginUser = async (email, password) => {
  const res = await instance.post("/auth/login", { email, password });
  return res.data;
};

export const registerUser = async (name, email, password, role) => {
  const res = await instance.post("/auth/register", { name, email, password, role });
  return res.data;
};