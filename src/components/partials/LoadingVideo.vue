<script>
export default {
  data() {
    return {
      isFading: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isFading = true; // Nascondi il componente LoadingVideo dopo 2 secondi
    }, 2000);
  },
};
</script>

<template>
  <div class="wrapper" :class="{ fade: isFading }">
    <div><span>BOOLFLIX</span></div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: #1c1c1c;
  z-index: 999999;
  position: fixed;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  align-items: center;
  span {
    font-size: 15rem;
    margin: 0 auto;
    color: red;
    height: 100%;
    font-weight: 800;
  }
}
.fade {
  animation: fadeOut 0.8s forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
