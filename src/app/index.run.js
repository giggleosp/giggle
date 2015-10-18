(function() {
  'use strict';

  angular
    .module('giggle')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
