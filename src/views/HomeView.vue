<template>
  <FormComponent />
  <hr />
  <Tasks />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormComponent from '@/components/Form.vue'
import Tasks from '@/components/Tasks.vue'
import { mapActions } from 'vuex'
// eslint-disable-next-line @typescript-eslint/no-var-requires

export default defineComponent({
  name: 'HomeView',
  components: {
    FormComponent,
    Tasks
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions(['loadLS'])
  },
  created () {
    this.loadLS()
  }
})
</script>
