<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <div>{{ post.body }}</div>
        <button @click="handleClick">Delete</button>
    </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config';

export default {
    props: ['id'],
    components: { Spinner },
    setup(props) {
        const { post, error, load } = getPost(props.id)
        load()

        const route = useRoute()
        const router = useRouter()
        console.log(route.params)

        const handleClick = async () => {
            await projectFirestore.collection('posts').doc(props.id).delete()
            router.push({ name: 'Home' })
        } 

        return { post, error, handleClick }
    }
}
</script>
