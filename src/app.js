import Icon from './cr.jpg';
import $ from 'jquery';
import M from 'materialize-css';
import Tb from './topbanque-logo.svg';

$(function () {

  $('.button-collapse').sideNav({ menuWidth: 350 });
  
  $('ul.tabs').tabs( {
    onShow : function(tab){
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


