<template>
  <h1 class="my-5">Sign In</h1>
  <form @submit.prevent="onSubmit">
    <input
      type="email"
      placeholder="Email"
      class="form-control my-2"
      v-model.trim="email"
    />
    <input
      type="password"
      placeholder="Password"
      class="form-control my-2"
      v-model="password"
    />
    <button type="submit" class="btn btn-primary" :disabled="isSubmitDisabled">
      Sign In
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'

export default defineComponent({
  name: 'SignInView',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isSubmitDisabled (): boolean {
      if (!this.email.includes('@')) {
        return true
      }
      if (this.password.length > 5) {
        return false
      }
      return true
    }
  },
  methods: {
    ...mapActions(['signIn']),
    onSubmit () {
      this.signIn({ email: this.email, password: this.password })
      this.email = ''
      this.password = ''
    }
  }
})
</script>

<style></style>
