<script setup>
import { ref, defineProps, onMounted } from 'vue';

defineProps({
    movieId: String,
});
const movieData = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey79e7b667&${props.movieId}`, {
            params: {
                i: movieId,
            },
        });
        movieData.value = response.data;
    } catch (error) {
        console.error(error);
    }
});
</script>

<template>
    
</template>