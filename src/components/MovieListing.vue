<script setup>
import axios from "axios";
import { reactive, defineProps, onMounted } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  movieId: String,
});
const state = reactive({
  movieData: null,
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=79e7b667&i=${props.movieId}`
    );
    state.movieData = response.data;
  } catch (error) {
    console.error(error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <RouterLink
    :to="'/movie/' + props.movieId"
    v-if="state.movieData"
    class="flex flex-row w-1/4 items-center justify-between font-color-secondary p-3 my-3 rounded-xl shadow-md bg-primary bg-opacity-70 text-gray-200"
  >
    <div class="flex flex-col pl-8">
      <h2 class="font-bold text-xl">{{ state.movieData.Title }}</h2>
      <p>{{ state.movieData.Genre }}</p>
    </div>
    <img
      :src="state.movieData.Poster"
      alt="Movie Poster"
      class="w-auto max-h-40 rounded-lg"
    />
  </RouterLink>
</template>
