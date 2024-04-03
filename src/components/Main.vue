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
  <div class="text-center my-5 container">
    <Card
      :element="element"
      v-for="(element, index) in this.store.tvList"
      :key="index"
    />
  </div>
</template>

<style lang="scss" scoped></style>
