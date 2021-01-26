<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="avenger in matchingAvengers" :key="avenger">{{ avenger }}</div>
    <button @click="handleClick">Stop Watch</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  setup() {

    const search = ref('')
    const avengers = ref(['Peter', 'Tony', 'Steve', 'Banner', 'Thor', 'Loki'])

    const matchingAvengers = computed(() => {
      return avengers.value.filter(avenger => avenger.includes(search.value))
    })

    // watch(search, () => {
    //   console.log('watch function ran')
    // })
    const stopWatch = watch(search, () => {
      console.log('watch function ran')
    })

    // watchEffect(() => {
    //   // console.log('watchEffect function ran')
    //   console.log('watchEffect function ran', search.value)
    // })
    const stopWatchEffect = watchEffect(() => {
      // console.log('watchEffect function ran')
      console.log('watchEffect function ran', search.value)
    })

    const handleClick = () => {
      stopWatch()
      stopWatchEffect()
    }

    return { avengers, search, matchingAvengers, handleClick }
  }
}
</script>
