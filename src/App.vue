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
            query: "matrix",
          },
        })
        .then((res) => {
          this.store[arrayName] = res.data.results;
          console.log(res.data.results);
        })
        .catch((error) => {
          console.error("Errore nella richiesta API:", error);
        });
    },
  },

  mounted() {
    this.getApi(this.store.tvUrl, "tvList");
    this.getApi(this.store.movieUrl, "movieList");

    console.log("tvlist", this.store.tvList);
  },
};
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss" scoped>
@use "./assets/scss/main.scss";
</style>
