import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const getUser = async () => axios.get("/users/");

export const getUserById = async (id: number) => axios.get(`/user/${id}`);

export const createUser = async (user: any) => {
  console.log(user);
  return axios.post("/users/", user);
};

export const deleteUser = async (id: number) => axios.delete(`/users/${id}`);

export const updateUser = async (user: any) => {
  return axios.put(`/posts/${user.id}`, user);
};
