import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.29.32.1:3333',
  // baseURL: 'http://10.0.2.2:3333',
  // baseURL: 'http://localhost:3333',
})
