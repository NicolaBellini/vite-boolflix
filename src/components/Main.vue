<script>
import { store } from "../data/store";
import Card from "./partials/Card.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

export default {
  data() {
    return {
      store,
      modules: [Navigation],
      modules: [Pagination],
    };
  },
  components: {
    SwiperSlide,
    Swiper,
    Card,
  },
};
</script>

<template>
  <div class="text-center my-5 container-fluid my-container d-flex flex-column">
    <h2 class="text-danger fw-bold" v-if="store.movieList.length > 0">film</h2>
    <swiper
      v-if="store.movieList.length > 0"
      :slidesPerView="3.5"
      :spaceBetween="0"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(element, index) in this.store.movieList"
        :key="index"
      >
        <Card v-if="store.movieList.length > 0" :element="element" />
      </swiper-slide>
    </swiper>

    <swiper
      v-if="store.movieList.length > 0"
      :slidesPerView="3.5"
      :spaceBetween="0"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(element, index) in this.store.tvList" :key="index">
        <Card :element="element" />
      </swiper-slide>
    </swiper>

    <div class="container card-container d-flex"></div>

    <div class="card-container d-flex">
      <div class="w-100 text-danger fw-bold" v-if="store.tvList.length > 0">
        serietv
      </div>
      <br />
      <Card
        :element="element"
        v-for="(element, index) in this.store.tvList"
        :key="index"
      />
    </div>
  </div>
  .
</template>

<style lang="scss" scoped>
.my-container {
  padding-top: 70px;
  padding-bottom: 100px;
  justify-content: center;
  flex-wrap: wrap;
  // Card {
  //   position: relative;
  //   z-index: 333;
  // }

  .card-container {
    justify-content: center;
    flex-wrap: wrap;
  }
}

.my-container .swiper {
  width: 100%;
  height: 600px;

  &-slide {
    text-align: center;
    font-size: 18px;
    background: #40404000;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
