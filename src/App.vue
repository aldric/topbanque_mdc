<template>
  <div id="app">
    <header>
      <ul id="dropdown1" class="dropdown-content">
        <li>
          <a href="#!">Pr&eacute;ts immobilier</a>
        </li>
        <li>
          <a href="#!">Cr&eacute;dit &agrave; la consommation</a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="#!">Trouver votre banque</a>
        </li>
      </ul>
      <div class="navbar-fixed">
        <nav role="navigation">
          <div class="nav-wrapper">
            <a id="logo-container" href="/" class="brand-logo center">
              <img id="front-page-logo" src="./topbanque-logo.svg"></img>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a class="dropdown-button" href="#!" data-activates="dropdown1">Comparez
                  <i class="material-icons right">arrow_drop_down</i>
                </a>
              </li>
              <li>
                <a href="sass.html">
                  <i class="material-icons left indigo-text">new_releases</i>Toutes les actualités</a>
              </li>
              <li>
                <a href="badges.html">
                  <i class="material-icons left green-text">local_offer</i>Les offres du moment</a>
              </li>
            </ul>
            <a href="#" data-activates="nav-mobile" class="button-collapse">
              <i class="material-icons black-text">menu</i>
            </a>
          </div>
        </nav>
        <ul id="nav-mobile" class="side-nav fixed">
          <li class="search">
            <div class="search-wrapper card">
              <input id="search" placeholder="Rechercher">
              <i class="material-icons">search</i>
              <div class="search-results"></div>
            </div>
          </li>
          <li class="bold">
            <hr/>
          </li>
          <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
              <li class="bold topbanque">
                <a class="collapsible-header waves-effect waves-orange">
                  <i class="material-icons red-text darken-4">widgets</i>Tous nos comparateurs</a>
                <div class="collapsible-body" style="display: none;">
                  <ul>
                    <li>
                      <router-link to="/comp">
                        <i class="material-icons blue-text darken-5">account_balance</i>Comparer les banques</a>
                      </router-link>
                    </li>
                    <li>
                      <a href="layout-fullscreen.html">
                        <i class="material-icons amber-text darken-5">credit_card</i>Trouvez votre carte</a>
                    </li>
                    <li>
                      <a href="layout-fullscreen.html">
                        <i class="material-icons blue-text darken-5">home</i>Les cr&eacute;dits immobiliers</a>
                    </li>
                    <li>
                      <a href="layout-fullscreen.html">
                        <i class="material-icons pink-text">favorites</i>Les assurances vie</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
              <li class="bold topbanque">
                <a class="collapsible-header waves-effect waves-orange">
                  <i class="material-icons">
                    <img src="./banques/32/bforbank.png">
                  </i>BforBank</a>
                <div class="collapsible-body" style="display: none;">
                  <ul>
                    <li>
                      <a href="layout-fullscreen.html">
                        <i class="material-icons amber-text">star_rate</i>L’avis de la rédaction</a>
                    </li>
                    <li>
                      <ul class="collapsible collapsible-accordion">
                        <li class="bold topbanque">
                          <a class="collapsible-header waves-effect waves-orange">
                            <i class="material-icons blue-text">account_balance_wallet</i>Compte courant</a>
                          <div class="collapsible-body" style="display: none;">
                            <ul>
                              <li>
                                <a href="layout-fullscreen.html">
                                  <i class="material-icons blue-text text-lighten-2">credit_card</i>Le compte courant BforBank</a>
                              </li>
                              <li>
                                <a href="layout-fullscreen.html">
                                  <i class="material-icons blue-text text-lighten-2">card_giftcard</i>Carte bancaire gratuite à vie</a>
                              </li>
                              <li>
                                <a href="layout-fullscreen.html">
                                  <i class="material-icons blue-text text-lighten-2">supervisor_account</i>Compte joint</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="layout-fullscreen.html">
                        <i class="material-icons light-green-text">lock</i>Epargne</a>
                    </li>
                    <li>
                      <a href="layout-fullscreen.html">
                        <i class="material-icons red-text">shopping_basket</i>Crédit à la consommation</a>
                    </li>
                    <li>
                      <a href="layout-fullscreen.html">
                        <i class="material-icons pink-text">favorites</i>Assurance vie</a>
                    </li>
                    <li>
                      <a href="layout-fullscreen.html">
                        <i class="material-icons cyan-text">timeline</i>Bourse – OPCVM</a>
                    </li>
                    <li>
                      <ul class="collapsible collapsible-accordion">
                        <li class="bold topbanque">
                          <a class="collapsible-header waves-effect waves-orange">
                            <i class="material-icons indigo-text">info</i>Services et actualité</a>
                          <div class="collapsible-body" style="display: none;">
                            <ul>
                              <li>
                                <a href="layout-fullscreen.html">
                                  <i class="material-icons indigo-text text-lighten-2">dashboard</i>Les services BforBank</a>
                              </li>
                              <li>
                                <a href="layout-fullscreen.html">
                                  <i class="material-icons indigo-text text-lighten-2">lock_outline</i>Economies sur vos frais bancaires</a>
                              </li>
                              <li>
                                <a href="layout-fullscreen.html">
                                  <i class="material-icons indigo-text text-lighten-2">smartphone</i>Applications mobile</a>
                              </li>
                              <li>
                                <a href="layout-fullscreen.html">
                                  <i class="material-icons indigo-text text-lighten-2">account_circle</i>Service client</a>
                              </li>
                              <li>
                                <a href="layout-fullscreen.html">
                                  <i class="material-icons indigo-text text-lighten-2">verified_user</i>Protection de vos données</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul class="collapsible collapsible-accordion">
                        <li class="bold topbanque">
                          <a class="collapsible-header waves-effect waves-orange">
                            <i class="material-icons green-text">local_offer</i>Offres et promotions</a>
                          <div class="collapsible-body" style="display: none;">
                            <ul>
                              <li>
                                <a href="layout-fullscreen.html">
                                  <i class="material-icons green-text text-lighten-2">list</i>Toutes les offres disponibles</a>
                              </li>
                              <li>
                                <a href="layout-fullscreen.html">
                                  <i class="material-icons green-text text-lighten-2">face</i>Parrainage</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
              <li class="bold topbanque">
                <a class="collapsible-header waves-effect waves-orange">
                  <i class="material-icons">
                    <img src="./banques/32/fortuneo.png">
                  </i>Fortuneo Banque</a>
                <div class="collapsible-body" style="display: none;">
                  <ul>
                    <li>
                      <a href="layout-fullscreen.html">Full Screen</a>
                    </li>
                    <li>
                      <a href="layout-horizontal-menu.html">Horizontal Menu</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
              <li class="bold topbanque">
                <a class="collapsible-header waves-effect waves-orange">
                  <i class="material-icons">
                    <img src="./banques/32/hellobank.png">
                  </i>HelloBank</a>
                <div class="collapsible-body" style="display: none;">
                  <ul>
                    <li>
                      <a href="layout-fullscreen.html">Full Screen</a>
                    </li>
                    <li>
                      <a href="layout-horizontal-menu.html">Horizontal Menu</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
              <li class="bold topbanque">
                <a class="collapsible-header waves-effect waves-orange">
                  <i class="material-icons">
                    <img src="./banques/32/ingdirect.png">
                  </i>ING Direct</a>
                <div class="collapsible-body" style="display: none;">
                  <ul>
                    <li>
                      <a href="layout-fullscreen.html">Full Screen</a>
                    </li>
                    <li>
                      <a href="layout-horizontal-menu.html">Horizontal Menu</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
              <li class="bold topbanque">
                <a class="collapsible-header waves-effect waves-orange">
                  <i class="material-icons">
                    <img src="./banques/32/monabanq.png">
                  </i>Monabanq</a>
                <div class="collapsible-body" style="display: none;">
                  <ul>
                    <li>
                      <a href="layout-fullscreen.html">Full Screen</a>
                    </li>
                    <li>
                      <a href="layout-horizontal-menu.html">Horizontal Menu</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li class="no-padding">
            <ul class="collapsible collapsible-accordion">
              <li class="bold topbanque">
                <a class="collapsible-header waves-effect waves-orange">
                  <i class="material-icons">
                    <img src="./banques/32/boursorama.png">
                  </i>Boursorama Banque</a>
                <div class="collapsible-body" style="display: none;">
                  <ul>
                    <li>
                      <a href="layout-fullscreen.html">Full Screen</a>
                    </li>
                    <li>
                      <a href="layout-horizontal-menu.html">Horizontal Menu</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  
    </header>
    <main>
      <nav class="clean">
        <div class="nav-wrapper">
          <div class="col s12">
            <a href="#!" class="breadcrumb">Vous etes</a>
            <a href="#!" class="breadcrumb">First</a>
            <a href="#!" class="breadcrumb">Second</a>
            <a href="#!" class="breadcrumb">Third</a>
          </div>
        </div>
      </nav>
    <router-view></router-view>

    </main>
    <footer class="page-footer orange">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Company Bio</h5>
            <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
  
          </div>
          <div class="col l3 s12">
            <h5 class="white-text">Settings</h5>
            <ul>
              <li>
                <a class="white-text" href="#!">Link 1</a>
              </li>
              <li>
                <a class="white-text" href="#!">Link 2</a>
              </li>
              <li>
                <a class="white-text" href="#!">Link 3</a>
              </li>
              <li>
                <a class="white-text" href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <div class="col l3 s12">
            <h5 class="white-text">Connect</h5>
            <ul>
              <li>
                <a class="white-text" href="#!">Link 1</a>
              </li>
              <li>
                <a class="white-text" href="#!">Link 2</a>
              </li>
              <li>
                <a class="white-text" href="#!">Link 3</a>
              </li>
              <li>
                <a class="white-text" href="#!">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          Made by
          <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
        </div>
      </div>
    </footer>
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large red">
        <i class="large material-icons">mode_edit</i>
      </a>
      <ul>
        <li>
          <a class="btn-floating red">
            <i class="material-icons">insert_chart</i>
          </a>
        </li>
        <li>
          <a class="btn-floating yellow darken-1">
            <i class="material-icons">format_quote</i>
          </a>
        </li>
        <li>
          <a class="btn-floating green">
            <i class="material-icons">publish</i>
          </a>
        </li>
        <li>
          <a class="btn-floating blue">
            <i class="material-icons">attach_file</i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
