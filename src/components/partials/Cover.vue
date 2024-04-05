<script>
import { store } from "../../data/store";
export default {
  data() {
    return {
      store,
    };
  },
  props: {
    element: Object,
  },
};
</script>

<template>
  <div class="cover-wrapper d-flex">
    <img :src="`${this.store.imgUrl}${element.poster_path}`" alt="" />
    <div class="text text-white">
      <h2>{{ element.name }}{{ element.title }}</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cover-wrapper {
  height: 100%;
  img {
    height: 100%;
    object-fit: cover;
  }
  .text {
    font-size: 3rem;
  }
}
</style>
