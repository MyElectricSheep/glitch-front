import useSWR from 'swr'
import axios from 'axios'
import Cookies from "js-cookie";

const token = Cookies.get("glitch-token");

let glitchBaseUrl

if (process.env.NODE_ENV === "development") {
  glitchBaseUrl = process.env.REACT_APP_GLITCH_BASE_URL_DEVELOPMENT;
} else {
  glitchBaseUrl = process.env.REACT_APP_GLITCH_BASE_URL_PRODUCTION;
}

const customAxios = axios.create({ 
    baseURL: glitchBaseUrl,
    headers: {'Authorization': `Bearer ${token}`} 
  })

const fetcher = url => customAxios.get(url).then(res => res.data)

const useUser = () => {
    const { data, error } = useSWR(`/auth/me`, fetcher)
    return {
      user: data,
      loading: !error && !data,
      error
    }
  }

export {
    useUser
}