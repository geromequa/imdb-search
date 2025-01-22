<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="flex flex-col justify-center items-center h-96 text-white">
    <span class="pi pi-exclamation-triangle text-primary text-7xl"></span>
    <h1 class="text-5xl font-bold mb-4">404 Not Found</h1>
    <p class="text-xl mb-5">This page does not exist</p>
    <RouterLink to="/"> Go Back</RouterLink>
  </div>
</template>
