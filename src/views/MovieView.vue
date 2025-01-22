<script setup>
import { reactive, defineProps, onMounted } from "vue";
import axios from "axios";

const props = defineProps({
  id: String,
});
const state = reactive({
  movieData: {},
});

onMounted(async () => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=79e7b667&i=${props.id}`
    );
    state.movieData = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div
      class="flex flex-col w-1/3 items-center p-5 bg-primary bg-opacity-40 rounded-xl shadow-md"
    >
      <div class="flex flex-row justify-between w-full">
        <div class="text-secondary font-semibold flex flex-col">
          <RouterLink to="/"><span class="pi pi-arrow-left"></span></RouterLink>
          <h1 class="font-bold text-xl py-2">{{ state.movieData.Title }}</h1>
          <p>{{ state.movieData.Genre }}, {{ state.movieData.Year }}</p>
          <h3 class="text-lg">Ratings</h3>
          <p
            v-for="rating in state.movieData.Ratings"
            class="border-secondary p-2 border-2 rounded-xl m-1"
          >
            {{ rating.Source }}: {{ rating.Value }}
          </p>
          <h3 class="text-lg">Plot</h3>
          <p class="font-semibold p-2 border-2 rounded-xl border-secondary">
            {{ state.movieData.Plot }}
          </p>
        </div>
        <img
          :src="state.movieData.Poster"
          alt="Movie Poster"
          class="pl-8 w-auto rounded-xl"
        />
      </div>
    </div>
  </div>
</template>
