<script setup>
import axios from "axios";
import { reactive, watch } from "vue";
import MovieListing from "@/components/MovieListing.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const state = reactive({
  searchString: "",
  movieIds: [],
  isLoading: false,
});

watch(
  () => state.searchString,
  () => {
    state.movieIds = [];
    handleInput();
  }
);

const handleInput = async () => {
  state.isLoading = true;
  console.log(state.searchString);
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=79e7b667&s=${state.searchString}`
    );
    if (Array.isArray(response.data.Search)) {
      for (const movie of response.data.Search) {
        state.movieIds.push(movie.imdbID);
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    state.isLoading = false;
  }
};
</script>

<template>
  <div>
    <div class="flex flex-col w-full items-center justify-center pt-10">
      <input
        type="text"
        v-model="state.searchString"
        placeholder="Search for a Movie"
        class="w-1/3 p-2 rounded-xl shadow-md bg-secondary opacity-40 text-gray-200 placeholder-gray-200"
      />
      <div v-if="state.isLoading">
        <PulseLoader />
      </div>
      <div v-else class="flex flex-col w-full items-center pt-10">
        <MovieListing
          v-for="movieId in state.movieIds"
          :key="movieId"
          :movieId="movieId"
        />
      </div>
    </div>
  </div>
</template>
