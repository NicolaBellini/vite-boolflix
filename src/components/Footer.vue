<script>
export default {};
</script>

<template>
  <div class="wrapper">
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h5>Esplora</h5>
            <ul>
              <li>Home</li>
              <li>Serie TV</li>
              <li>Film</li>
              <li>Ultime uscite</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>Account</h5>
            <ul>
              <li>Accedi</li>
              <li>Registrati</li>
              <li>Il mio account</li>
              <li>Aiuto</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>Informazioni</h5>
            <ul>
              <li>Chi siamo</li>
              <li>Contatti</li>
              <li>Termini di servizio</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>Social</h5>
            <ul class="social-icons">
              <li>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 20px;
  background-color: red;
  .footer {
    background-color: #1c1c1c;
    color: #ffffff;
    padding: 40px 0;

    .container {
      display: flex;
      justify-content: space-between;

      .row {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .col-md-3 {
          h5 {
            font-size: 1.2rem;
            margin-bottom: 20px;
          }

          ul {
            list-style-type: none;
            padding-left: 0;

            li {
              margin-bottom: 10px;
              cursor: pointer;

              &:hover {
                text-decoration: underline;
              }
            }
          }

          .social-icons {
            display: flex;
            gap: 10px;

            li {
              a {
                color: #ffffff;
                font-size: 1.5rem;

                &:hover {
                  color: #e50914; // Netflix red
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
