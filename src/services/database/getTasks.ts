import { Task } from '@/models'
import axios from 'axios'

export const getTasks = async (token?: string, uid?: string): Promise<Task[]> => {
  const { data } = await axios.get(`${process.env.VUE_APP_DATABASE_URL}/tasks/${uid}.json?auth=${token}`)
  const tasksArray: Task[] = Object.values(data) ?? []

  return tasksArray
}
