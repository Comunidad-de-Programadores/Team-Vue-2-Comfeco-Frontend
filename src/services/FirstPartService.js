import { settings } from '../settings';
import Axios from 'axios'

export default class FirstPartService {
  async TokenCredential(){
    return await Axios.post(`http://localhost/Team-Vue-2-Comfeco-Backend/public/oauth/token`, {
      grant_type:  "client_credentials",
      client_id: 3,
      client_secret: "ZWPPLoZe0STTgSJuUg5ijeOlb2TRajRlEQD22rDf",
      scope: "app-client-guest"
    })
  }
  
  async Login(email, password, rememberMe){
    return await Axios.post(`${settings.api}/login`, {
      email,
      password,
      rememberMe
    })
  }

  async CancelPassword(email){
    return await Axios.post(`${settings.api}/cancelRecoverPassword`, { email })
  }

  async RecoverPassword(email, password, password_confirmation){
    return await Axios.post(`${settings.api}/generatePassword`, {
      email,
      password,
      password_confirmation
    })
  }

  async Register(name, email, password, password_confirmation){
    return await Axios.post(`${settings.api}/register`, {
      name,
      email,
      password,
      password_confirmation
    })
  }

  async RememberPassword(email){
    return await Axios.post(`${settings.api}/recoverPassword`, { email })
  }
}