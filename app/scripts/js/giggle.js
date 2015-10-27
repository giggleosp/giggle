/**
 * Created by Enda on 20/10/2015.
 */

// global controls
var btnMenu = $(".btn-menu");
var sideNav = $(".side-nav");
var listItem = $(".nav > li");
var dropdownListItem = $(".nav > .dropdown > .dropdown-menu > li");

$(function () {
  listItem.on("click", function () {
    addActiveClassToListItem(this);
  });
  dropdownListItem.on("click", function () {
    addActiveClassToListItem(this);
  });
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

function addActiveClassToListItem(clicked) {
  var clickedItem = $(clicked);

  //
  if(!clickedItem.hasClass("dropdown")) {
    if(listItem.hasClass("active")) {
      listItem.removeClass("active");
    }
    if(dropdownListItem.hasClass("active")) {
      dropdownListItem.removeClass("active");
    }
    clickedItem.addClass("active");
  }

  // add active class to parent li if child li is selected
  var dropdown = clickedItem.closest(".dropdown-menu").closest("li.dropdown");
  if(dropdown.length > 0) {
    dropdown.addClass("active");
  }

}
