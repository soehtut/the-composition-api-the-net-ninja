<template>
    <div v-for="post in posts" :key="post.id" class="post">
        <SinglePost :post="post" />
    </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
import { onMounted, onUnmounted, onUpdated } from 'vue';

export default {
    components: { SinglePost },
    props: ['posts'],
    setup() {
        
    }
}
</script>

<style>
    .post {
        margin-bottom: 20px;
    }
</style>
