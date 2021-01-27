<template>
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
        <div>{{ post.title }}</div>
    </router-link>
    <div>{{ sniffet }}</div>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }}</span>
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated } from 'vue';

export default {
    props: ['post'],
    setup(props) {
        const sniffet = computed(() => {
            return props.post.body.substring(0,100) + '....'
        })

        return { sniffet }
    }
}
</script>
