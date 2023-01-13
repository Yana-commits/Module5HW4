import apiClient from "../client";

export const getById = (id: string) => apiClient({
  path: `users/${id}`,
  method: 'GET'
})

export const getByPage = (page: number) => apiClient({
  path: `users?page=${page}`,
  method: 'GET'
})

export const getAllResources = () => apiClient({
    path: `unknown`,
    method: 'GET'
})

export const getSingleResource = (id: string) => apiClient({
    path: `unknown/${id}`,
    method: 'GET'
})

export const createClient = () => apiClient({
    path: `users`,
    method: 'POST',
    data: { name: 'morpheus', job: 'leader'}
})

export const updateClient = () => apiClient({
    path: `users/2`,
    method: 'PUT',
    data: { name: 'morpheus', job: 'zion resident' }
})