<template>
    <div>{{ post.title }}</div>
    <div>{{ sniffet }}</div>
</template>

<script>
import { computed } from 'vue';

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
