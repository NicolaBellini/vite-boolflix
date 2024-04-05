<script>
import { store } from "../data/store";
import Card from "./partials/Card.vue";
import Copertina from "./partials/Copertina.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

export default {
  data() {
    return {
      store,
      modules: [Navigation],
      modules: [Pagination],
      modules: [Autoplay],
    };
  },
  components: {
    Copertina,
    SwiperSlide,
    Swiper,
    Card,
  },
};
</script>

<template>
  <div class="text-center my-5 container-fluid my-container d-flex flex-column">
    <swiper
      v-if="store.queryInput == 0"
      :spaceBetween="30"
      :centeredSlides="true"
      :loopAdditionalSlides="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="false"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(element, index) in this.store.trendingList"
        :key="index"
      >
        <Copertina :element="element" />
      </swiper-slide>
    </swiper>

    <p v-if="store.movieGenreList.length > 0">ricerca per genere</p>
    <swiper
      v-if="store.movieGenreList.length > 0"
      :slidesPerView="5"
      :spaceBetween="0"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(element, index) in this.store.movieGenreList"
        :key="index"
      >
        <Card v-if="store.tvList.length > 0" :element="element" />
      </swiper-slide>
    </swiper>

    <h2 class="m-5 text-danger fw-bold" v-if="store.queryInput == 0">
      Trending Week
    </h2>
    <swiper
      v-if="store.queryInput == 0"
      :slidesPerView="5"
      :spaceBetween="0"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(element, index) in this.store.trendingList"
        :key="index"
      >
        <Card :element="element" />
      </swiper-slide>
    </swiper>

    <h2 class="m-5 text-danger fw-bold" v-if="store.movieList.length > 0">
      film
    </h2>
    <swiper
      v-if="store.movieList.length > 0"
      :slidesPerView="5"
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

    <h2 class="m-5 text-danger fw-bold" v-if="store.tvList.length > 0">
      serietv
    </h2>
    <swiper
      v-if="store.tvList.length > 0"
      :slidesPerView="5"
      :spaceBetween="0"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(element, index) in this.store.tvList" :key="index">
        <Card v-if="store.tvList.length > 0" :element="element" />
      </swiper-slide>
    </swiper>

    <div class="container card-container d-flex"></div>

    <div class="card-container d-flex">
      <br />
      <Card
        :element="element"
        v-for="(element, index) in this.store.trendingList"
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

    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
