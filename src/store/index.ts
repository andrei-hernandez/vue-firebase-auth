import { createStore } from 'vuex'
import router from '@/router'
import { Task, User } from '@/models'
import { getTasks, addTask, editTask, deleteTask, createUser, signIn } from '@/services'

export default createStore({
  state: {
    tasks: [] as Array<Task>,
    task: {
      id: '',
      name: '',
      categories: [],
      state: '',
      number: 0
    } as Task,
    user: null as User | null
  },
  getters: {
    userAuthenticated: (state) => {
      return !!state.user
    }
  },
  mutations: {
    setUser (state, payload: User) {
      state.user = payload
    },
    loadFromLS (state, payload) {
      state.tasks = payload
    },
    addTask (state, payload: Task): void {
      state.tasks.push(payload)
    },
    delete (state, payload: string): void {
      state.tasks = state.tasks.filter(task => task.id !== payload)
    },
    task (state, payload: string): void {
      if (!state.tasks.find((task: Task) => task.id === payload) ?? state.task) {
        router.push('/')
        return
      }

      state.task =
        state.tasks.find((task: Task) => task.id === payload) ?? state.task
    },
    update (state, payload: Task): void {
      state.tasks =
        state.tasks.map((task: Task) => task.id === payload.id ? payload : task)
      router.push('/')
    },
    reset (state): void {
      state.task = {
        id: '',
        name: '',
        categories: [],
        state: '',
        number: 0
      }
    }
  },
  actions: {
    async createUser ({ commit }, payload: User): Promise<void> {
      try {
        const res = await createUser(payload)
        commit('setUser', res)
        router.push('/')
        localStorage.setItem('credentials', JSON.stringify(res))
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
    async signIn ({ commit }, payload: User): Promise<void> {
      try {
        const res = await signIn(payload)
        commit('setUser', res)
        router.push('/')
        localStorage.setItem('credentials', JSON.stringify(res))
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
    signOut ({ commit }): void {
      commit('setUser', null)
      router.push('/signin')
      localStorage.removeItem('credentials')
    },
    async addTask ({ commit, state }, task: Task): Promise<void> {
      try {
        const res = await addTask(task, state?.user?.idToken, state?.user?.localId)
        commit('addTask', res)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err)
      }
    },
    async deleteTask ({ commit, state }, id: string): Promise<void> {
      try {
        await deleteTask(id, state?.user?.idToken, state?.user?.localId)
        commit('delete', id)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
    setTask ({ commit }, id: string): void {
      commit('task', id)
    },
    async updateTask ({ commit, state }, task: Task): Promise<void> {
      try {
        const res = await editTask(task, state?.user?.idToken, state?.user?.localId)
        commit('update', res)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
    resetTask ({ commit }): void {
      commit('reset')
    },
    async loadLS ({ commit, state }): Promise<void> {
      if (localStorage.getItem('credentials')) {
        commit('setUser', JSON.parse(localStorage.getItem('credentials') as string))
      } else {
        return commit('setUser', null)
      }
      try {
        const res: Task[] = await getTasks(state?.user?.idToken, state?.user?.localId)
        commit('loadFromLS', res)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }
  },
  modules: {
  }
})
