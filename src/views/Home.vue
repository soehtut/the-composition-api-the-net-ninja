<template>
  <div class="home">
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'
import PostList from '../components/PostList.vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {

    const posts = ref([
      {title: 'HTML Basics', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dolores rerum tempora, sint quibusdam nesciunt nostrum culpa ab? Ipsam facilis neque culpa atque nam aspernatur ex deserunt officiis at quidem.', id: 1},
      {title: 'CSS Basics', body: 'Lorem Ipsum', id: 2}
    ])

    return { posts }
  }
}
</script>
