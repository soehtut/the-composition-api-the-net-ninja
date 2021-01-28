<template>
    <div class="tag">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length" class="layout">
            <PostList :posts="postsWithTag" />
            <TagCloud :posts="posts" />
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import Spinner from '../components/Spinner.vue'
import getPosts from '../composables/getPosts'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
    components: { PostList, Spinner, TagCloud },
    setup() {
        const route = useRoute()
        const { posts, error, load } = getPosts()
        load()
        const postsWithTag = computed(() => {
            return posts.value.filter((post) => post.tags.includes(route.params.tag))
        })

        return { postsWithTag, error, posts }
    }
}
</script>

<style>
    .tag {
        width: 1200px;
        margin: 0 auto;
        padding: 10px;
    }
</style>
