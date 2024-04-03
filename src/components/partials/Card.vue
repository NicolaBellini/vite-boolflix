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
  <div class="card m-2" style="width: 18rem">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body my-card-body">
      <h5 class="card-title">{{ element.name }}{{ element.title }}</h5>
      <p class="card-text">{{ element.overview }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        titolo originale:{{ element.original_title }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.my-card-body {
  height: 200px;
  overflow: auto;
}
</style>
