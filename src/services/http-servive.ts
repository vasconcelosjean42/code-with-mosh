import { AxiosResponse } from "axios";
import apiClient from "./api-client";

interface Entity{
  id: number
}

const HTTPService = (endpoint: string) => {
  const getAll = <T>() => {
    const controller = new AbortController();
    
    const request =  apiClient
      .get<T[]>(endpoint, {
        signal: controller.signal,
      })
      
    return {request, cancel: () => controller.abort()}
  }
  
  const create = <T>(entity: T) => {
    return apiClient.post(endpoint, entity)
  }
  
  const update = <T extends Entity>(entity: T) => {
    return apiClient.patch(endpoint + "/" + entity.id, entity)
  }
  
  const remove = (userId: number) =>{
    return apiClient.delete(endpoint + "/" + userId)
  }
  
  return {getAll, create, update, remove}
}

export default HTTPService