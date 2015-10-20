/**
 * Created by Enda on 20/10/2015.
 */

$(function () {
  var btnMenu = $("#menu-drawer");
  var sideNav = $(".side-nav");
  var wrapper = $(".wrapper");

  btnMenu.on("click", function () {
    if(sideNav.css("display") == "none") {
      sideNav.show("slide", { direction: "right" }, 800);
      wrapper.removeClass("col-md-12").addClass("col-md-10");
    } else {
      sideNav.hide("slide", { direction: "right" }, 800);
      wrapper.removeClass("col-md-10").addClass("col-md-12");
    }
  })
});
