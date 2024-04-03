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
  <div class="card m-2" style="width: 18rem">
    <img
      :src="`${this.store.imgUrl}${element.poster_path}`"
      class="card-img-top"
      alt="..."
    />
    <h5 class="card-title">{{ element.name }}{{ element.title }}</h5>
    <div class="card-body my-card-body">
      <p v-if="element.overview.length === 0">no overview</p>
      <p class="card-text">{{ element.overview }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        titolo originale:{{ element.original_title }}
      </li>
      <li class="list-group-item">lang: '{{ element.original_language }}'</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.my-card-body {
  height: 200px;
  overflow: auto;
}
</style>
