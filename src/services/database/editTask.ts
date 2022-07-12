import { Task } from '@/models'
import axios from 'axios'

export const editTask = async (task: Task, token?: string, uid?: string): Promise<Task> => {
  const { data } = await axios.patch<Task>(`${process.env.VUE_APP_DATABASE_URL}/tasks/${uid}/${task.id}.json?auth=${token}`, {
    ...task
  })

  return data
}
