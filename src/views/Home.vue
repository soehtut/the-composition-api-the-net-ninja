<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Increase Age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    let name = ref('John')
    let age = ref(30)

    const p = ref(null)

    const handleClick = () => {
      name.value = 'Peter'
      age.value = 20
    }

    // return { name: name, age: age}
    return { name, age, handleClick, p}
  }
}
</script>
