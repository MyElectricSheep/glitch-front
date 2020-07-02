import axios from 'axios'
import Cookies from "js-cookie";
import { makeUseAxios } from 'axios-hooks'

// Glitch Instance
const token = Cookies.get("glitch-token");
let glitchBaseUrl

if (process.env.NODE_ENV === "development") {
  glitchBaseUrl = process.env.REACT_APP_GLITCH_BASE_URL_DEVELOPMENT;
} else {
  glitchBaseUrl = process.env.REACT_APP_GLITCH_BASE_URL_PRODUCTION;
}
 
const useGlitch = makeUseAxios({
  axios: axios.create({ 
      baseURL: glitchBaseUrl,
      headers: {'Authorization': `Bearer ${token}`} 
    })
})

export {
    useGlitch
}