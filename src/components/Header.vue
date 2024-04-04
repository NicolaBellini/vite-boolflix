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
            @keyup="$emit('startSearch')"
          />
          <button
            class="btn btn-outline-success m-1"
            type="button"
            @click="$emit('startSearch'), (store.queryInput = '')"
          >
            Search
          </button>
          <button
            class="btn btn-outline-primary m-1"
            type="button"
            @click="(store.queryInput = ''), $emit('startSearch')"
          >
            Reset
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
