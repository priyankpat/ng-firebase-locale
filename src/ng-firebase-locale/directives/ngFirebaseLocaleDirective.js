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
