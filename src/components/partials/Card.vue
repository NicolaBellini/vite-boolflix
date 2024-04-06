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
    <div class="front">
      <img
        v-if="element.poster_path === null"
        src="https://images.unsplash.com/photo-1560109947-543149eceb16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlbGxpY29sYXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Image not available!"
        data-bs-toggle="modal"
        :data-bs-target="'#staticBackdrop-' + element.id"
      />
      <img
        v-else
        :src="`${this.store.imgUrl}${element.poster_path}`"
        class="card-img-top"
        alt="..."
        data-bs-toggle="modal"
        :data-bs-target="'#staticBackdrop-' + element.id"
      />
      <h5 class="card-title">{{ element.name }}{{ element.title }}</h5>
      <button
        type="button"
        class="btn btn-outline-light w-50 info-button"
        data-bs-toggle="modal"
        :data-bs-target="'#staticBackdrop-' + element.id"
      >
        info
      </button>
    </div>
    <!-- Modal -->
    <div
      class="modal"
      :id="'staticBackdrop-' + element.id"
      data-bs-backdrop="scrolling"
      data-bs-keyboard="false"
      tabindex="-1"
      :aria-labelledby="'staticBackdropLabel-' + element.id"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
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

          <!-- modalBody -->
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
              class="btn btn-outline-dark card-button"
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
  width: 100%;
  height: 70%;
  border-radius: 20px;
  background: #000000;
  position: relative;

  // border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;
  color: white;
  .front {
    img {
      height: 400px;
      width: 100%;
      border-radius: 20px;
    }

    .info-button {
      position: absolute;
      bottom: -90px;
      right: 23%;
      margin: 0 auto;
      margin-bottom: 5px;
    }
  }
}

/* Stile per il modal */
.modal {
  opacity: 0.9;
  height: 500px;
  color: white;
  position: absolute;
  width: 130%;
  left: -16%;
  overflow: visible;
  &.fade {
    .modal-dialog {
      &.modal-lg {
        max-width: 130%;
        width: auto;
      }
    }
  }

  .modal-content {
    border-radius: 20px;
    background-color: #000000;
    border: 2px solid #c3c6ce;

    .modal-header {
      .modal-title {
        text-align: center;
        font-size: 1.5rem;
      }
    }

    .modal-body {
      .card-body {
        .card-text {
          max-height: 200px;
          overflow: auto;
          font-size: 1rem;
          color: #cdcdcd;
        }
      }
    }

    .modal-footer {
      .card-button {
        background-color: #000000;
        color: #bd0000;
      }
    }
  }
}
</style>
