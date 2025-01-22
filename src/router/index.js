import { createRouter, createWebHistory } from "vue-router";
import SearchView from "@/views/SearchView.vue";
import MovieView from "@/views/MovieView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "search",
      component: SearchView,
    },
    {
      path: "/movie/:id",
      name: "movie-details",
      component: MovieView,
      props: true,
    },
  ],
});

export default router;
