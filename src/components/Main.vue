<script>
import { store } from "../data/store";
import Card from "./partials/Card.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Card,
  },
};
</script>

<template>
  <div class="text-center my-5 container my-container d-flex flex-column">
    <div class="container card-container d-flex">
      <div class="w-100 text-danger fw-bold" v-if="store.movieList.length > 0">
        film
      </div>
      <Card
        v-show="store.movieList.length > 0"
        :element="element"
        v-for="(element, index) in this.store.movieList"
        :key="index"
      />
    </div>

    <div class="card-container d-flex">
      <div class="w-100 text-danger fw-bold" v-if="store.tvList.length > 0">
        serietv
      </div>
      <br />
      <Card
        :element="element"
        v-for="(element, index) in this.store.tvList"
        :key="index"
      />
    </div>
  </div>
  .
</template>

<style lang="scss" scoped>
.my-container {
  padding-top: 70px;
  padding-bottom: 100px;
  justify-content: center;
  flex-wrap: wrap;

  .card-container {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
