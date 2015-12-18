'use strict';

/**
 * Created by Enda on 20/10/2015.
 */
$(function () {

  // global controls
  var btnMenuOpen = $("#menu-open");
  var btnMenuClose = $("#menu-close");
  var sideNav = $(".side-nav");
  var listItem = $(".nav > li");
  var dropdownListItem = $(".nav > .dropdown > .dropdown-menu > li");
  var navbarBrand = $(".navbar-brand");
  var mobileSearchButton = $("#btn-search-sm");
  var mobileTextBox = $(".navbar-form-sm > .form-group > .form-control");

  function toggleMobileSearch() {
    navbarBrand.toggleClass("hidden");
    mobileTextBox.toggleClass("hidden-xs");
  }

  function showSideNav() {
    sideNav.delay(500).show('slide', {direction: 'left'}, 200);
  }

  function hideSideNav() {
    sideNav.delay(300).hide('slide', {direction: 'left'}, 200);
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

  // when window is resized above tablet level
  window.addEventListener("resize", function () {
    if($(this).width() > 767 && navbarBrand.hasClass("hidden")) {
      toggleMobileSearch();
    }
  });

  //// when a list item (navigation button) is clicked
  //listItem.on("mousedown", function () {
  //  addActiveClassToListItem(this);
  //});

  //// when a dropdown list item is clicked
  //dropdownListItem.on("mousedown", function () {
  //  addActiveClassToListItem(this);
  //});

  // show/hide side navigation menu
  btnMenuOpen.on("mousedown", function () {
    showSideNav();
  });

  btnMenuClose.on("mousedown", function () {
    hideSideNav();
  });

  // main logo click
  navbarBrand.on("mousedown", function () {
    removeOtherActiveClasses();
    addActiveClassToListItem(".home");
  });

  // show textbox on mobile
  mobileSearchButton.on("mousedown", function () {
    if($(window).width() < 767 && mobileTextBox.hasClass("hidden-xs")) {
      toggleMobileSearch();
    }
  });

  // hide textbox if mobile and clear any value
  mobileTextBox.on("blur", function () {
    $(this).val("");
    if($(window).width() < 767 && !mobileTextBox.hasClass("hidden-xs")) {
      toggleMobileSearch();
    }
  });
});
