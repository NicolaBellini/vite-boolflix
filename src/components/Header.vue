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
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">BOOLFLIX</a>

        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="this.store.queryInput"
          />
          <button
            class="btn btn-outline-success"
            type="button"
            @click="$emit('startSearch')"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: #f8f9fa;
}
</style>
