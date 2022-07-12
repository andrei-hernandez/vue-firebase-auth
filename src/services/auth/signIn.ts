import axios from 'axios'
import { User } from '@/models'

export const signIn = async (user: User) => {
  const { data } = await axios.post(`${process.env.VUE_APP_AUTH_URL}:signInWithPassword?key=${process.env.VUE_APP_FB_API_KEY}`,
    { ...user, returnSecureToken: true })
  return data
}
