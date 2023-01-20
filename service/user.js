import { CommonAxios } from "../config";
import baseUrl from "../BaseUrl";
// `string`
export const getUser = async (email) => {
  try {
    const res = await CommonAxios.get(`${baseUrl}?email=${email}`);
    console.log("111111111111", res);
    return res.data;
  } catch (err) {
    return [];
  }
};

export const getAllUser = async () => {
  try {
    const res = await CommonAxios.get(`${baseUrl}?role=user`);
    return res.data;
  } catch (err) {
    return [];
  }
};

export const getUserById = async (id, role) => {
  try {
    const res = await CommonAxios.get(`${baseUrl}?role=${role}&id=${id}`);
    return res.data;
  } catch (err) {
    return [];
  }
};

export const updateUserById = async (id, data) => {
  return await CommonAxios.put(`${baseUrl}/${id}`, data);
};
export const addUser = async (user) => {
  return await CommonAxios.post(baseUrl, user);
};

export const deleteUser = async (id) => {
  return await CommonAxios.delete(`${baseUrl}/${id}`);
};
