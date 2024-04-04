<script>
export default {
  props: {
    element: Object,
  },
  mounted() {
    console.log(this.element.original_language);
  },
  computed: {},
};
</script>

<template>
  <img
    v-if="element.original_language === 'en'"
    src="https://flagpedia.net/data/flags/icon/16x12/gb.webp"
    alt=""
  />
  <img
    v-if="element.original_language === 'it'"
    src="https://flagpedia.net/data/flags/icon/36x27/it.webp"
    alt=""
  />
</template>

<style lang="scss" scoped>
img {
  width: 30px;
  max-height: 20px !important;
}
</style>
