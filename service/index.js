import axios from 'axios'
import { BASE_URL } from '../res/constants'
export const fetchAdsLevel = async (URL = '', params = {}) => {
    return await axios.get(`${BASE_URL}/${URL}` + { params })
}