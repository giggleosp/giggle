/**
 * Created by Enda on 20/10/2015.
 */

// global controls
var btnMenuOpen = $("#menu-open");
var btnMenu = $(".btn-menu");
var sideNav = $(".side-nav");
var wrapper = $(".wrapper");

$(function () {

  showSideNav();

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
  wrapper.removeClass("col-md-12").addClass("col-md-10");
  btnMenuOpen.fadeOut();
  sideNav.show("slide", { direction: "right" }, 400);
}

function hideSideNav() {
  wrapper.removeClass("col-md-10").addClass("col-md-12");
  btnMenuOpen.fadeIn();
  sideNav.hide("slide", { direction: "right" }, 400);
}
