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
  angular.module('ngFirebaseLocale',
      [
          'ngFirebaseLocale.config',
          'ngFirebaseLocale.directives',
          'ngFirebaseLocale.filters',
          'ngFirebaseLocale.services'
      ]);

})(angular);
