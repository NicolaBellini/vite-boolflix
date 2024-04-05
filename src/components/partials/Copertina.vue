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
    <div class="text">
      <span>{{ element.name }}{{ element.title }}</span>
      <p>{{ element.overview }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cover-wrapper {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.074);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 0.7rem;
  transition: all ease 0.3s;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80%;
  img {
    height: 100%;
    object-fit: cover;
  }
  .text {
    color: rgb(172, 172, 172);
    margin: 0 40px;
    text-align: start;
    width: 50%;
    font-size: 3rem;
    p {
      font-size: 1.5rem;
    }
  }
}
</style>
