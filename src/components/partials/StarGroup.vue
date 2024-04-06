<script>
export default {
  props: {
    element: Object,
  },
  computed: {
    modifiedVote() {
      return (this.element.vote_average / 2).toFixed(1);
    },
  },
};
</script>

<template>
  <div class="starGroup">
    <i class="fa-solid fa-star" v-if="modifiedVote > 0"></i>
    <i class="fa-regular fa-star" v-else></i>
    <i class="fa-solid fa-star" v-if="modifiedVote > 1"></i>
    <i class="fa-regular fa-star" v-else></i>
    <i class="fa-solid fa-star" v-if="modifiedVote > 2"></i>
    <i class="fa-regular fa-star" v-else></i>
    <i class="fa-solid fa-star" v-if="modifiedVote > 3"></i>
    <i class="fa-regular fa-star" v-else></i>
    <i class="fa-solid fa-star" v-if="modifiedVote > 4"></i>
    <i class="fa-regular fa-star" v-else></i>
  </div>
</template>

<style lang="scss" scoped>
.starGroup {
  margin-top: 30px;
  .fa-solid {
    color: red;
  }
}
</style>
