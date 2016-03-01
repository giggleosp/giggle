'use strict';

/**
 * @ngdoc service
 * @name app.navigationService
 * @description
 * # navigationService
 * Service in the app.
 */
angular.module('app.services')
  .service('navigationMenuService', navigationMenuService);


function navigationMenuService() {
  var isMenuOpen = true;

  return {
    getMenuItems: function getMenuItems(isLoggedIn) {
      return [
        {
          title: "General",
          items: [
            {
              title: "Home",
              href: "#/",
              icon: {
                text: "home",
                md: true
              },
              isVisible: true
            },
            {
              title: "Sign In",
              href: "#/sign-in",
              icon: {
                text: "person",
                md: true
              },
              isVisible: !isLoggedIn
            },
            {
              title: "Sign Up",
              href: "#/sign-up",
              icon: {
                text: "person_add",
                md: true
              },
              isVisible: !isLoggedIn
            }
            // {
            //   title: "Account",
            //   href: "#/account",
            //   icon: {
            //     text: "account_circle",
            //     md: true
            //   },
            //   isVisible: vm.isLoggedIn
            // },
            //{
            //  title: "Sign Out",
            //  href: "",
            //  icon: {
            //    text: "person_outline",
            //    md: true
            //  },
            //  isVisible: isLoggedIn
            //}
          ]
        },
        {
          title: "Events",
          items: [
            {
              title: "All",
              href: "#/events",
              icon: {
                text: "local_activity",
                md: true
              },
              isVisible: true
            },
            {
              title: "Local",
              href: "",
              icon: {
                text: "location_on",
                md: true
              },
              isVisible: true
            },
            {
              title: "Music",
              href: "",
              icon: {
                text: "music_note",
                md: true
              },
              isVisible: true
            },
            {
              title: "Sports",
              href: "",
              icon: {
                text: "fa fa-futbol-o",
                md: false
              },
              isVisible: true
            },
            {
              title: "Theatre",
              href: "",
              icon: {
                text: "theaters",
                md: true
              },
              isVisible: true
            },
            {
              title: "Comedy",
              href: "",
              icon: {
                text: "tag_faces",
                md: true
              },
              isVisible: true
            },
            {
              title: "Festivals",
              href: "",
              icon: {
                text: "library_music",
                md: true
              },
              isVisible: true
            }
          ]
        },
        {
          title: "Acts",
          items: [
            {
              title: "All",
              href: "",
              icon: {
                text: "local_play",
                md: true
              },
              isVisible: true
            },
            {
              title: "Local",
              href: "",
              icon: {
                text: "location_on",
                md: true
              },
              isVisible: true
            },
            {
              title: "Music",
              href: "",
              icon: {
                text: "music_note",
                md: true
              },
              isVisible: true
            },
            {
              title: "Sports",
              href: "",
              icon: {
                text: "fa fa-futbol-o",
                md: false
              },
              isVisible: true
            },
            {
              title: "Theatre",
              href: "",
              icon: {
                text: "theaters",
                md: true
              },
              isVisible: true
            },
            {
              title: "Comedy",
              href: "",
              icon: {
                text: "tag_faces",
                md: true
              },
              isVisible: true
            },
            {
              title: "Festivals",
              href: "",
              icon: {
                text: "library_music",
                md: true
              },
              isVisible: true
            }
          ]
        },
        {
          title: "Venues",
          items: [
            {
              title: "All",
              href: "#/venues",
              icon: {
                text: "local_play",
                md: true
              },
              isVisible: true
            },
            {
              title: "Local",
              href: "",
              icon: {
                text: "location_on",
                md: true
              },
              isVisible: true
            },
            {
              title: "Bars",
              href: "",
              icon: {
                text: "local_bar",
                md: true
              },
              isVisible: true
            },
            {
              title: "Music",
              href: "",
              icon: {
                text: "music_note",
                md: true
              },
              isVisible: true
            },
            {
              title: "Sports",
              href: "",
              icon: {
                text: "fa fa-futbol-o",
                md: false
              },
              isVisible: true
            },
            {
              title: "Theatre",
              href: "",
              icon: {
                text: "theaters",
                md: true
              },
              isVisible: true
            }
          ]
        }
      ];
    },
    getMobileMenuItems: function getMobileMenuItems(isLoggedIn) {
      return [
        {
          title: "General",
          items: [
            {
              title: "Home",
              href: "#/",
              icon: {
                text: "home",
                md: true
              },
              isVisible: true
            },
            {
              title: "Events",
              href: "",
              icon: {
                text: "event",
                md: true
              },
              isVisible: true
            },
            {
              title: "Acts",
              href: "",
              icon: {
                text: "local_play",
                md: true
              },
              isVisible: true
            },
            {
              title: "Venues",
              href: "",
              icon: {
                text: "local_bar",
                md: true
              },
              isVisible: true
            }
          ]
        },
        {
          title: "Account",
          items: [
            {
              title: "Sign In",
              href: "#/sign-in",
              icon: {
                text: "person",
                md: true
              },
              isVisible: !isLoggedIn
            },
            {
              title: "Sign Up",
              href: "#/sign-up",
              icon: {
                text: "person_add",
                md: true
              },
              isVisible: !isLoggedIn
            },
            {
              title: "Log Out",
              href: "",
              icon: {
                text: "person_outline",
                md: true
              },
              isVisible: isLoggedIn
            }
          ]
        }
      ];
    },
    setOpenedState: function setOpenedState(isOpen) {
      isMenuOpen = isOpen;
    },
    getOpenedState: function getOpenedState() {
      return isMenuOpen;
    }
  }
}
