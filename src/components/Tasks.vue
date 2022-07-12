<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Categories</th>
        <th scope="col">State</th>
        <th scope="col">Number</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="task.id" v-for="(task, index) in tasks">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ task.name }}</td>
        <td>{{ task.categories.join(', ') }}</td>
        <td>{{ task.state }}</td>
        <td>{{ task.number }}</td>
        <td>
          <button class="btn btn-danger btn-sm" @click="deleteTask(task.id)">
            Delete
          </button>
          <router-link
            class="btn btn-warning ms-2 btn-sm"
            :to="{
              name: 'edit',
              params: { id: task.id }
            }"
          >
            Edit
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'vuex'

export default defineComponent({
  name: 'TasksList',
  computed: {
    ...mapState(['tasks'])
  },
  methods: {
    ...mapActions(['deleteTask'])
  }
})
</script>

<style></style>
