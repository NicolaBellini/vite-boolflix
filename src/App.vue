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
    getApi(apiUrl, arrayName) {
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
    this.getApi(this.store.movieUrl, "movieList");
    this.getApi(this.store.tvUrl, "tvList");
  },
};
</script>

<template>
  <Header
    @startSearch="
      getApi(this.store.movieUrl, 'movieList');
      getApi(this.store.tvUrl, 'tvList');
    "
  />
  <Main />
</template>

<style lang="scss" scoped>
@use "./assets/scss/main.scss";
</style>
