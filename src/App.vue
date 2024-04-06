<script>
import { store } from "./data/store";
import axios from "axios";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Main,
    Footer,
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
          console.log(this.store.trendingList);
        })
        .catch((error) => {
          console.error("Errore nella richiesta API:", error);
          console.log(this.store.queryInput);
        });
    },
    getFilmByGenre(apiUrl, num, arrayName) {
      apiUrl =
        this.store.selectValue != "0"
          ? `https://api.themoviedb.org/3/discover/movie?api_key=3e148cf1ff2157f850e9f747c1563631&with_genres=${num}`
          : "https://api.themoviedb.org/3/search/movie?api_key=3e148cf1ff2157f850e9f747c1563631";

      axios
        .get(apiUrl, {
          params: {
            query: this.store.queryInput,

            language: "it-IT",
          },
        })
        .then((res) => {
          this.store[arrayName] = res.data.results;
          console.log("----------", this.store.movieGenreList);
        })
        .catch((error) => {
          console.error("Errore nella richiesta API:", error);
          console.log(this.store.queryInput);
        });
    },
    getDefaultApi(apiUrl, arrayName) {
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
    getGenreApi(apiUrl, arrayName) {
      axios
        .get(apiUrl, {
          params: {
            query: this.store.queryInput,

            language: "it-IT",
          },
        })
        .then((res) => {
          console.log("----------");
          this.store[arrayName] = res.data.genres;

          console.log(this.store.genreList);
        })
        .catch((error) => {
          console.error("Errore nella richiesta API:", error);
          console.log(this.store.queryInput);
        });
    },
  },

  mounted() {
    this.getApi(this.store.topRatedMovieUrl, "movieList", "movie");
    this.getApi(this.store.topRatedTvUrl, "tvList", "tv");
    this.getGenreApi(this.store.genreUrl, "genreList");
    this.getDefaultApi(this.store.trendingUrl, "trendingList");
  },
};
</script>

<template>
  <div class="wrapper-app">
    <Header
      @startSearch="
        getApi(this.store.movieUrl, 'movieList', 'movie');
        getApi(this.store.tvUrl, 'tvList', 'tv');
      "
      @genreSearch="
        getFilmByGenre(
          this.store.genreUrl,
          this.store.selectValue,
          'movieGenreList'
        )
      "
    />
    <Main />
    <Footer />
  </div>
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
.modal-backdrop {
  display: none !important;
}
.wrapper-app {
  margin: 0;
  padding: 0;

  background-color: rgb(0, 0, 0);
}
</style>
