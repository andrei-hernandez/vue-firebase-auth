<template>
  <div class="navbar navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand"> Forms </router-link>
    <div class="d-flex">
      <router-link to="/" class="btn btn-dark" v-if="userAuthenticated"
        >Tasks</router-link
      >
      <button v-if="userAuthenticated" class="btn btn-dark" @click="signOut">
        Sign out
      </button>
      <router-link to="/signin" class="btn btn-dark" v-if="!userAuthenticated"
        >Sign In</router-link
      >

      <router-link to="/signup" class="btn btn-dark" v-if="!userAuthenticated"
        >Sign Up</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue' // @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'

export default defineComponent({
  name: 'NavBar',
  components: {},
  computed: {
    ...mapGetters(['userAuthenticated'])
  },
  methods: {
    ...mapActions(['signOut'])
  }
})
</script>

<style></style>
