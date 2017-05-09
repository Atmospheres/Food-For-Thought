var myApp = angular.module('myApp', ['ngMessages']);

myApp.config(function ($routeProvider) {
  $routeProvider

  .when('/',{
    templateUrl: 'pages/main.html',

  })
})
myApp.directive("searchResults", function() {
  return {
    restrict: 'AE',
    tremplateURL: 'searchResults.html',
    replace: true
  }
});
