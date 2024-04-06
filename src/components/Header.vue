<script>
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    handleSearch() {
      if (this.store.movieList.length == 0 && this.store.tvList.length == 0) {
        this.store.queryInput = "";
        this.$emit("startSearch");
      }
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container d-flex">
      <nav class="navbar navbar-expand-lg bg-body-tertiary my-nav">
        <div class="container-fluid my-container">
          <div class="my-logo">
            <a
              class="navbar-brand text-danger fw-bolder fs-3"
              href="#"
              @click="(store.queryInput = ''), $emit('startSearch')"
              >BOOLFLIX</a
            >
          </div>

          <form class="d-flex" role="search">
            <select
              v-model="store.selectValue"
              class="form-select"
              aria-label="Default select example"
              @change="$emit('genreSearch')"
            >
              <option selected value="0">Open this select menu</option>
              <option
                :value="item.id"
                v-for="(item, index) in store.genreList"
                :key="index"
              >
                {{ item.name }}
              </option>
            </select>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="this.store.queryInput"
              @keyup.enter="
                handleSearch(),
                  $emit('startSearch'),
                  console.log(store.queryInput)
              "
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
              @click="
                (store.queryInput = ''), (store.selectValue = '0');
                $emit('startSearch', 'genreSearch');
              "
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
  background-color: #363636;
  .container {
    display: flex;
    justify-content: center;
    .my-nav {
      padding: 20px;
      width: 100%;
      position: fixed;
      background-color: #222222 !important;
      .my-container {
        max-width: 1320px;
      }
    }
  }
}
</style>
