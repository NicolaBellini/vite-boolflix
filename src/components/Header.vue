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
  <div class="wrapper">
    <div class="container d-flex">
      <nav class="navbar navbar-expand-lg bg-body-tertiary my-nav">
        <div class="container-fluid my-container">
          <a
            class="navbar-brand text-danger fw-bolder fs-3"
            href="#"
            @click="(store.queryInput = ''), $emit('startSearch')"
            >BOOLFLIX</a
          >

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
              class="btn btn-outline-danger m-1"
              type="button"
              @click="$emit('startSearch'), (store.queryInput = '')"
            >
              Search
            </button>
            <button
              class="btn btn-outline-light m-1"
              type="button"
              @click="(store.queryInput = ''), $emit('startSearch')"
            >
              Reset
            </button>
          </form>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #484848;
  .container {
    display: flex;
    justify-content: center;
    .my-nav {
      width: 100%;
      position: fixed;
      background-color: #484848 !important;
      .my-container {
        max-width: 1320px;
      }
    }
  }
}
</style>
