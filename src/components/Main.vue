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
  <div class="text-center my-5 container my-container d-flex">
    <div class="w-100 text-danger fw-bold">film</div>
    <Card
      :element="element"
      v-for="(element, index) in this.store.movieList"
      :key="index"
    />
    <br />
    <div class="w-100 text-danger fw-bold">serietv</div>
    <br />
    <Card
      :element="element"
      v-for="(element, index) in this.store.tvList"
      :key="index"
    />
  </div>
</template>

<style lang="scss" scoped>
.my-container {
  justify-content: center;
  flex-wrap: wrap;
}
</style>
