import Icon from './cr.jpg';
import $ from 'jquery';
import Materialize from 'materialize-css';
import Tb from './topbanque-logo.svg';

$(function () {

  $('.button-collapse').sideNav({ menuWidth: 350 });
  $('ul.tabs').tabs('select_tab', 'tab_id');
  $('.collapsible').collapsible();

  $('input#search').focus(function () {
    $(this).parent().addClass('focused');
  });
  $('input#search').blur(function () {
    if (!$(this).val()) {
      $(this).parent().removeClass('focused');
    }
  });

}); // end of document ready


