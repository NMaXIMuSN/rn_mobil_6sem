import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://665ac6a8003609eda45ec6b5.mockapi.io/'
})

export { axiosInstance }