import { AxiosResponse } from "axios";
import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

const getAllUsers = () => {
  const controller = new AbortController();
  
  const request =  apiClient
    .get<User[]>("/users", {
      signal: controller.signal,
    })
    
  return {request, cancel: () => controller.abort()}
}

const createUser = (user: User) => {
  return apiClient.post("/users", user)
}

const updateUser = (userId: number, updatedUser: User) => {
  return apiClient.patch("/users/" + userId, updatedUser)
}

const deleteUser = (userId: number) => {
  return apiClient.delete("/users/" + userId)
}

export {getAllUsers, createUser, updateUser, deleteUser}