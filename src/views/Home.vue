<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import Spinner from '../components/Spinner.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud },
  setup() {

    const { posts, error, load } = getPosts()
    load()
    return { posts, error }

  }
}
</script>

<style>
  .home {
    width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  /* .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  } */
</style>
