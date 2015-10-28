/**
 * Created by Enda on 20/10/2015.
 */

// global controls
var btnMenu = $(".btn-menu");
var sideNav = $(".side-nav");
var listItem = $(".nav > li");
var dropdownListItem = $(".nav > .dropdown > .dropdown-menu > li");
var navbarBrand = $(".navbar-brand");

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

  navbarBrand.on("click", function () {
    removeOtherActiveClassDeclarations();
    addActiveClassToListItem(".home");
  })

});

function showSideNav() {
  sideNav.show('slide', {direction: 'left'}, 250);
}

function hideSideNav() {
  sideNav.hide('slide', {direction: 'left'}, 250);
}

function removeOtherActiveClassDeclarations() {
  if(listItem.hasClass("active")) {
    listItem.removeClass("active");
  }
  if(dropdownListItem.hasClass("active")) {
    dropdownListItem.removeClass("active");
  }
}
function addActiveClassToListItem(li) {
  var item = $(li);

  if(!item.hasClass("dropdown")) {
    removeOtherActiveClassDeclarations();
    item.addClass("active");
  }

  // add active class to parent li if child li is selected
  var dropdown = item.closest(".dropdown-menu").closest("li.dropdown");
  if(dropdown.length > 0) {
    dropdown.addClass("active");
  }

}
