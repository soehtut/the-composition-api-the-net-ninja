<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="avenger in matchingAvengers" :key="avenger">{{ avenger }}</div>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'

export default {
  name: 'Home',
  setup() {

    const search = ref('')
    const avengers = ref(['Peter', 'Tony', 'Steve', 'Banner', 'Thor', 'Loki'])

    const matchingAvengers = computed(() => {
      return avengers.value.filter(avenger => avenger.includes(search.value))
    })

    return { avengers, search, matchingAvengers }
  }
}
</script>
