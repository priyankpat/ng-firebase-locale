(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('ngFirebaseLocale.config', [])
      .value('ngFirebaseLocale.config', {
          debug: true
      });

  // Modules
  angular.module('ngFirebaseLocale.directives', []);
  angular.module('ngFirebaseLocale.filters', []);
  angular.module('ngFirebaseLocale.services', []);
  angular.module('ngFirebaseLocale.templates', []);
  angular.module('ngFirebaseLocale',
      [
          'ngFirebaseLocale.config',
          'ngFirebaseLocale.directives',
          'ngFirebaseLocale.filters',
          'ngFirebaseLocale.services',
          'ngFirebaseLocale.templates'
      ]);

})(angular);

(function(angular) {

  function ngFirebaseLocaleDirective() {
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'ngFirebaseLocale.html',
      scope: {

      }
    };
  }

  angular
    .module('ngFirebaseLocale.directives')
    .directive('ngFirebaseLocale', ngFirebaseLocaleDirective);

})(angular);

angular.module('ngFirebaseLocale.templates').run(['$templateCache', function($templateCache) {$templateCache.put('ngFirebaseLocale.html','<h1>Hello World</h1>\n');}]);