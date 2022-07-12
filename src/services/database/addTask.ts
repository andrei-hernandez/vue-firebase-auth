import { Task } from '@/models'
import axios from 'axios'

export const addTask = async (task: Task, token?: string, uid?: string): Promise<Task> => {
  const { data } = await axios.put<Task>(`${process.env.VUE_APP_DATABASE_URL}/tasks/${uid}/${task.id}.json?auth=${token}`, {
    ...task
  })
  return data
}
