import { User } from '@/models'
import axios from 'axios'

export const createUser = async (user: User) => {
  const { data } = await axios.post(`${process.env.VUE_APP_AUTH_URL}:signUp?key=${process.env.VUE_APP_FB_API_KEY}`,
    { ...user, returnSecureToken: true })
  return data
}
