<template>
  <div>Editar</div>
  <div>
    <FormComponent :isEdit="true" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'vuex'
import FormComponent from '@/components/Form.vue'

export default defineComponent({
  name: 'EditView',
  components: {
    FormComponent
  },
  computed: {
    ...mapState(['task'])
  },
  methods: {
    ...mapActions(['setTask'])
  },
  created () {
    this.setTask(this.$route.params.id)
  }
})
</script>

<style></style>
