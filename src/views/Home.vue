<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    let name = 'John'
    let age = 30

    const p = ref(null)

    const handleClick = () => {
      console.log(p, p.value)
      p.value.textContent = 'hello dojo'
    }

    // return { name: name, age: age}
    return { name, age, handleClick, p}
  }
}
</script>
