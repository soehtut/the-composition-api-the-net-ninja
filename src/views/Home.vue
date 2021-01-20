<template>
  <div class="home">
    Home
    <p>My name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup() {
    let name = 'John'
    let age = 30

    const handleClick = () => {
      console.log('you clicked me')
    }

    // return { name: name, age: age}
    return { name, age, handleClick}
  }
}
</script>
