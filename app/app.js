(function () {
  'use strict';

  // Declare app level module which depends on views, and app/components
  angular
    .module('playTogether', ['ui.router', 'ui.bootstrap'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state({
          name: 'login',
          url: '/login',
          templateUrl: 'login/login.html',
          controller: 'LoginCtrl',
          controllerAs: '$scope'
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


      $urlRouterProvider.otherwise('/login');
    });
})();