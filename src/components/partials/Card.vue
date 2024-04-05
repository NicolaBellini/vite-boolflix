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
      class="btn btn-outline-dark w-50 info-button"
      data-bs-toggle="modal"
      :data-bs-target="'#staticBackdrop-' + element.id"
    >
      info
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
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
  height: 100%;
  border-radius: 20px;
  background: #f5f5f5;
  position: relative;
  padding: 1rem;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;

  img {
    height: 392px;
  }

  .info-button {
    margin: 0 auto;
    margin-bottom: 5px;
  }
}

/* Stile per il modal */
.modal {
  position: absolute;
  width: 130%;
  left: -16%;
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
    background-color: #f5f5f5;
    border: 2px solid #c3c6ce;

    .modal-header {
      .modal-title {
        font-size: 1.5rem;
        color: #333;
      }
    }

    .modal-body {
      .card-body {
        .card-text {
          font-size: 1rem;
          color: #555;
        }
      }
    }

    .modal-footer {
      .card-button {
        background-color: #000000;
        color: #ffffff;
      }
    }
  }
}
</style>
