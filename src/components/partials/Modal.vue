<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
export default {};
</script>

<template>
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
</template>

<style lang="scss" scoped>
/* Stile per il modal */
.modal {
  &.fade {
    .modal-dialog {
      &.modal-lg {
        max-width: 60%;
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
