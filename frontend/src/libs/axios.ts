import { BASE_API_URL } from '@/constants'
import axios from 'axios'
import useAxios, { configure } from 'axios-hooks'

const apiUrl = import.meta.env.VITE_API_URL ?? BASE_API_URL

axios.defaults.baseURL = apiUrl
axios.defaults.headers.common['Content-Type'] = 'application/json'

configure({ axios })

export default axios
export { useAxios }
