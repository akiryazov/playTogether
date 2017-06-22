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
          name: 'login',
          url: '/login',
          templateUrl: 'login/login.html',
          controller: 'LoginCtrl'
        })
        .state({
          name: 'main',
          url: '/main',
          templateUrl: 'main/main.html',
          controller: 'MainCtrl'
        })
        .state({
          name: 'singleEvent',
          url: '/singleEvent',
          templateUrl: 'singleEvent/singleEvent.html',
          controller: 'SingleEventCtrl'
        })
        .state({
          name: 'createEvent',
          url: '/createEvent',
          templateUrl: 'createEvent/createEvent.html',
          controller: 'CreateEventCtrl'
        })
        .state({
          name: 'chat',
          url: '/chat',
          templateUrl: 'chat/chat.html',
          controller: 'ChatCtrl'
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