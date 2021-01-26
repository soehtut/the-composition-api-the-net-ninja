<template>
  <div class="home">
    Home
    <p>{{ cp.name }} - {{ cp.age }}</p>
    <button @click="updateCP">Update CP</button>
    <p>{{ im.name }} - {{ im.age }}</p>
    <button @click="updateIM">Update IM</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Home',
  setup() {

    // ref
    const cp = ref({name: 'Steve', age: 80})
    const updateCP = () => {
      cp.value.age++
    }

    // reactive (Primitive value are not reactive)
    const im = reactive({name: 'Tony', age: 40})
    const updateIM = () => {
      im.age++
    }
    

    return { cp, updateCP, im, updateIM }
  }
}
</script>
