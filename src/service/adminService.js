import axios from 'axios'
import authHeader from './authHeader'

const API_URL = 'https://d2200e024a6ae8.lhr.life/api/admin/signal/add'

const adminPost = async (data) => await axios.post(API_URL, data, { headers: authHeader() })

const adminService = {
  adminPost,
}
export default adminService
