(function () {
  'use strict';

  // Declare app level module which depends on views, and app/components
  angular
    .module('playTogether', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'toastr'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state({
          name: 'home',
          url: '/home',
          templateUrl: 'home/home.html',
          controller: 'HomeCtrl',
          controllerAs: '$scope'
        })
        .state({
          name: 'registration',
          url: '/registration',
          templateUrl: 'registration/registration.html',
          controller: 'RegistrationCtrl'
        })
        .state({
          name: 'view1',
          url: '/view1',
          templateUrl: 'view1/view1.html',
          controller: 'View1Ctrl'
        })
        .state({
          name: 'view2',
          url: '/view2/view2',
          templateUrl: 'view2/view2.html',
          controller: 'View2Ctrl'
        });


      $urlRouterProvider.otherwise('/home');
    });
})();