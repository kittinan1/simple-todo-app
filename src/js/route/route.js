angular.module('todoApp')
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "src/view/home.tmpl"
    })
    .state('information', {
      url: "/information",
      templateUrl: "src/view/information.tmpl"
    })
    .state('registration', {
      url: "/registration",
      controller: "mainController",
      templateUrl: "src/view/registration.html"
    })
});
