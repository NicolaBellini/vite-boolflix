<script>
export default {
  data() {
    return {};
  },
  props: {
    element: Object,
  },
};
</script>

<template>
  <div class="card" style="width: 18rem">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ element.name }}{{ element.title }}</h5>
      <p class="card-text">{{ element.overview }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
