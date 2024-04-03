<script>
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="text-center my-5 container">
    film <br />
    {{ this.store.movieList }} <br />
    serietv <br />
    {{ this.store.tvList }}
  </div>
</template>

<style lang="scss" scoped></style>
