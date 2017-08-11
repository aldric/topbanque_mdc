import Icon from './cr.jpg';
import $ from 'jquery';
import M from 'materialize-css';
import Tb from './topbanque-logo.svg';
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Comp from './Comp.vue'

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/comp',
  component: Comp
}];

const router = new VueRouter({
  mode: 'history',
  routes
});

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
});

$(function () {

  $('.button-collapse').sideNav({
    menuWidth: 350
  });

  $('ul.tabs').tabs({
    onShow: function (tab) {
      console.log(tab);
      //Materialize.showStaggeredList(tab);
    }
  });

  $('.collapsible').collapsible();

  $(".dropdown-button").dropdown();

  $('input#search').focus(function () {
    $(this).parent().addClass('focused');
  });
  $('input#search').blur(function () {
    if (!$(this).val()) {
      $(this).parent().removeClass('focused');
    }
  });
  console.log('loaded ...');

}); // end of document ready