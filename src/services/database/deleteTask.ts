import axios from 'axios'

export const deleteTask = async (taskId: string, token?: string, uid?: string): Promise<void> => {
  return await axios.delete(`${process.env.VUE_APP_DATABASE_URL}/tasks/${uid}/${taskId}.json?auth=${token}`)
}
