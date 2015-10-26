/**
 * Created by Enda on 20/10/2015.
 */

// global controls
var btnMenu = $(".btn-menu");
var sideNav = $(".side-nav");

$(function () {

  // show/hide side navigation menu
  btnMenu.on("click", function () {
    if(sideNav.css("display") == "none") {
      showSideNav();
    } else {
      hideSideNav();
    }
  });
});

function showSideNav() {
  sideNav.show('slide', {direction: 'left'}, 250);
}

function hideSideNav() {
  sideNav.hide('slide', {direction: 'left'}, 250);
}
