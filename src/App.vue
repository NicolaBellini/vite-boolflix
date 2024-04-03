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
    getApi(apiUrl) {
      axios
        .get(apiUrl, {
          params: {
            query: "matrix",
          },
        })
        .then((res) => {
          this.store.tvList = res.data.results;
          console.log(res.data.results);
        });
    },
  },

  mounted() {
    this.getApi(this.store.tvUrl);
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
