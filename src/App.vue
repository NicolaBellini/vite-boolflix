<script>
import { store } from "./data/store";
import axios from "axios";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store,
    };
  },

  methods: {
    getApi(apiUrl, arrayName, type) {
      apiUrl =
        this.store.queryInput.length > 0
          ? apiUrl
          : `https://api.themoviedb.org/3/${type}/top_rated?api_key=3e148cf1ff2157f850e9f747c1563631`;

      axios
        .get(apiUrl, {
          params: {
            query: this.store.queryInput,

            language: "it-IT",
          },
        })
        .then((res) => {
          console.log("----------");
          this.store[arrayName] = res.data.results;
          console.log(res.data.results);
          console.log(this.store.queryInput);
        })
        .catch((error) => {
          console.error("Errore nella richiesta API:", error);
          console.log(this.store.queryInput);
        });
    },
  },

  mounted() {
    this.getApi(this.store.movieUrl, "movieList", "movie");
    this.getApi(this.store.tvUrl, "tvList", "tv");
  },
};
</script>

<template>
  <Header
    @startSearch="
      getApi(this.store.movieUrl, 'movieList', 'movie');
      getApi(this.store.tvUrl, 'tvList', 'tv');
    "
  />
  <Main />
</template>

<style lang="scss" scoped>
@use "./assets/scss/main.scss";
</style>
