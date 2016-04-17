'use strict';

/**
 * @ngdoc service
 * @name app.actFactory
 * @description
 * # actFactory
 * Factory in the app.
 */
angular.module('app.factories',[])
  .factory('actFactory', function () {
    // Service logic
    // ...

    // <!--{{ act.types[0].name }}<span ng-if="act.types[1]">/{{ act.types[1].name }}</span> in {{ act.city.name }}<span ng-if="act.country.id != vm.currentUser.country.id">, {{ act.country.niceName }}</span>-->

    // Public API here
    return {
      createCardSubtitle: function (act) {
        var subTitle;
        subTitle = act.types[0].name;
        act.types[1] ? subTitle += "/" + act.types[1].name : null;
        subTitle += " in ";
        act.city ? subTitle += act.city.name : subTitle += act.county.name;
        subTitle += ", " + act.country.niceName;
        return subTitle;
      }
    };
  });
