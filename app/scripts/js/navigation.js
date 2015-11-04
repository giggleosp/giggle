/**
 * Created by Enda on 20/10/2015.
 */

// global controls
var btnMenu = $(".btn-menu");
var sideNav = $(".side-nav");
var listItem = $(".nav > li");
var dropdownListItem = $(".nav > .dropdown > .dropdown-menu > li");
var navbarBrand = $(".navbar-brand");
var mobileSearchButton = $("#btn-search-sm");
var mobileTextBox = $(".navbar-form-sm > .form-control");
var mobileForm = $(".navbar-form-sm");

$(function () {

  // when a list item (navigation button) is clicked
  listItem.on("click", function () {
    addActiveClassToListItem(this);
  });

  // when a dropdown list item is clicked
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

  // main logo click
  navbarBrand.on("click", function () {
    removeOtherActiveClasses();
    addActiveClassToListItem(".home");
  });

  mobileSearchButton.on("click", function () {
    toggleMobileSearch();
  });

  mobileTextBox.on("blur", function () {
    mobileForm.removeClass("focus");
  });

});

function toggleMobileSearch() {
  if (!mobileForm.hasClass("focus")) {
    mobileForm.addClass("focus");
    mobileTextBox.focus(); // focus in on the textbox
  }
}

function showSideNav() {
  sideNav.show('slide', {direction: 'left'}, 250);
}

function hideSideNav() {
  sideNav.hide('slide', {direction: 'left'}, 250);
}

function removeOtherActiveClasses() {
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
    removeOtherActiveClasses();
    item.addClass("active");
  }

  // add active class to parent li if child li is selected
  var dropdown = item.closest(".dropdown-menu").closest("li.dropdown");
  if(dropdown.length > 0) {
    dropdown.addClass("active");
  }
}
