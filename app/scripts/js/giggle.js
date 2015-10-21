/**
 * Created by Enda on 20/10/2015.
 */

  // global controls
var btnMenu = $("#menu-drawer");
var menuIcon = $(".ic-menu");
var sideNav = $(".side-nav");
var wrapper = $(".wrapper");

$(function () {

  //showSideNav();

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
  menuIcon.fadeOut(function () {
    $(this).text("arrow_forward").fadeIn();
  });
  sideNav.show("slide", { direction: "right" }, 400);
}

function hideSideNav() {
  wrapper.removeClass("col-md-10").addClass("col-md-12");
  menuIcon.fadeOut(function () {
    $(this).text("menu").fadeIn();
  });
  sideNav.hide("slide", { direction: "right" }, 400);
}
