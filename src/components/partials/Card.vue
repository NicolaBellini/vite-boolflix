<script>
import { store } from "../../data/store";
import StarGroupVue from "./StarGroup.vue";
import FlagLang from "./FlagLang.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    StarGroupVue,
    FlagLang,
  },

  props: {
    element: Object,
  },
};
</script>

<template>
  <div class="card m-2" style="width: 18rem">
    <img
      v-if="element.poster_path === null"
      src="https://images.unsplash.com/photo-1560109947-543149eceb16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlbGxpY29sYXxlbnwwfHwwfHx8MA%3D%3D"
      alt=""
    />
    <img
      v-else
      :src="`${this.store.imgUrl}${element.poster_path}`"
      class="card-img-top"
      alt="..."
    />
    <h5 class="card-title">{{ element.name }}{{ element.title }}</h5>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      :data-bs-target="'#staticBackdrop-' + element.id"
    >
      Launch static backdrop modal
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'staticBackdrop-' + element.id"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      :aria-labelledby="'staticBackdropLabel-' + element.id"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              {{ element.name }}{{ element.title }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="my-card-body">
              <div class="card-body">
                <p v-if="element.overview.length === 0">no overview</p>
                <p class="card-text">{{ element.overview }}</p>

                <FlagLang :element="element" />
                <StarGroupVue :element="element" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-dark"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 480px;
  position: relative;
  overflow: hidden;

  img {
    height: 392px;
  }
  // .my-card-body {
  //   width: 100%;
  //   height: 480px;
  //   overflow: auto !important;
  //   display: none !important;
  //   position: absolute !important;
  //   animation: slideIn 0.6s forwards;
  // }
  // &:hover .my-card-body {
  //   display: block !important;
  //   background-color: rgba(0, 0, 0, 0.561) !important;
  // }
}
// @keyframes slideIn {
//   from {
//     transform: translateY(100%);
//   }
//   to {
//     transform: translateY(0);
//   }
// }
</style>
