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
              state: "main",
              icon: {
                text: "home",
                md: true
              },
              isVisible: true
            },
            {
              title: "Sign In",
              state: "sign-in",
              icon: {
                text: "person",
                md: true
              },
              isVisible: !isLoggedIn
            },
            {
              title: "Sign Up",
              state: "sign-up",
              icon: {
                text: "person_add",
                md: true
              },
              isVisible: !isLoggedIn
            }
            // {
            //   title: "Account",
            //   state: "#/account",
            //   icon: {
            //     text: "account_circle",
            //     md: true
            //   },
            //   isVisible: vm.isLoggedIn
            // },
            //{
            //  title: "Sign Out",
            //  state: "",
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
              state: "events.recommended",
              icon: {
                text: "local_activity",
                md: true
              },
              isVisible: true
            }
            //{
            //  title: "Local",
            //  state: "",
            //  icon: {
            //    text: "location_on",
            //    md: true
            //  },
            //  isVisible: true
            //},
            //{
            //  title: "Music",
            //  state: "",
            //  icon: {
            //    text: "music_note",
            //    md: true
            //  },
            //  isVisible: true
            //},
            //{
            //  title: "Sports",
            //  state: "",
            //  icon: {
            //    text: "fa fa-futbol-o",
            //    md: false
            //  },
            //  isVisible: true
            //},
            //{
            //  title: "Theatre",
            //  state: "",
            //  icon: {
            //    text: "theaters",
            //    md: true
            //  },
            //  isVisible: true
            //},
            //{
            //  title: "Comedy",
            //  state: "",
            //  icon: {
            //    text: "tag_faces",
            //    md: true
            //  },
            //  isVisible: true
            //},
            //{
            //  title: "Festivals",
            //  state: "",
            //  icon: {
            //    text: "library_music",
            //    md: true
            //  },
            //  isVisible: true
            //}
          ]
        },
        //{
        //  title: "Acts",
        //  items: [
        //    {
        //      title: "All",
        //      state: "",
        //      icon: {
        //        text: "local_play",
        //        md: true
        //      },
        //      isVisible: true
        //    },
        //    {
        //      title: "Local",
        //      state: "",
        //      icon: {
        //        text: "location_on",
        //        md: true
        //      },
        //      isVisible: true
        //    },
        //    {
        //      title: "Music",
        //      state: "",
        //      icon: {
        //        text: "music_note",
        //        md: true
        //      },
        //      isVisible: true
        //    },
        //    {
        //      title: "Sports",
        //      state: "",
        //      icon: {
        //        text: "fa fa-futbol-o",
        //        md: false
        //      },
        //      isVisible: true
        //    },
        //    {
        //      title: "Theatre",
        //      state: "",
        //      icon: {
        //        text: "theaters",
        //        md: true
        //      },
        //      isVisible: true
        //    },
        //    {
        //      title: "Comedy",
        //      state: "",
        //      icon: {
        //        text: "tag_faces",
        //        md: true
        //      },
        //      isVisible: true
        //    },
        //    {
        //      title: "Festivals",
        //      state: "",
        //      icon: {
        //        text: "library_music",
        //        md: true
        //      },
        //      isVisible: true
        //    }
        //  ]
        //},
        {
          title: "Venues",
          items: [
            {
              title: "All",
              state: "venues.recommended",
              icon: {
                text: "local_play",
                md: true
              },
              isVisible: true
            }
            //{
            //  title: "Local",
            //  state: "",
            //  icon: {
            //    text: "location_on",
            //    md: true
            //  },
            //  isVisible: true
            //},
            //{
            //  title: "Bars",
            //  state: "",
            //  icon: {
            //    text: "local_bar",
            //    md: true
            //  },
            //  isVisible: true
            //},
            //{
            //  title: "Music",
            //  state: "",
            //  icon: {
            //    text: "music_note",
            //    md: true
            //  },
            //  isVisible: true
            //},
            //{
            //  title: "Sports",
            //  state: "",
            //  icon: {
            //    text: "fa fa-futbol-o",
            //    md: false
            //  },
            //  isVisible: true
            //},
            //{
            //  title: "Theatre",
            //  state: "",
            //  icon: {
            //    text: "theaters",
            //    md: true
            //  },
            //  isVisible: true
            //}
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
              state: "main",
              icon: {
                text: "home",
                md: true
              },
              isVisible: true
            },
            {
              title: "Events",
              state: "events.recommended",
              icon: {
                text: "event",
                md: true
              },
              isVisible: true
            },
            //{
            //  title: "Acts",
            //  state: "",
            //  icon: {
            //    text: "local_play",
            //    md: true
            //  },
            //  isVisible: true
            //},
            {
              title: "Venues",
              state: "venues.recommended",
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
              state: "#/sign-in",
              icon: {
                text: "person",
                md: true
              },
              isVisible: !isLoggedIn
            },
            {
              title: "Sign Up",
              state: "#/sign-up",
              icon: {
                text: "person_add",
                md: true
              },
              isVisible: !isLoggedIn
            },
            //{
            //  title: "Log Out",
            //  state: "",
            //  icon: {
            //    text: "person_outline",
            //    md: true
            //  },
            //  isVisible: isLoggedIn
            //}
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
