import axios from 'axios'
import type { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axiosInstance
