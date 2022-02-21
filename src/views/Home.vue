<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-rate v-model="value1"></el-rate>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { ref } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    const value1 = ref(null)
    return {
      value1
    }
  }
})
</script>
