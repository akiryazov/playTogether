'use strict';
    angular
        .module('playTogether')
        .controller('AppCtrl', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
      
          $rootScope.loggedIn = false;
 }]);

// angular
//     .module('playTogether')
//     .controller('RegisterModalCtrl', ['$uibModalInstance', '$rootScope', function ($uibModalInstance, $rootScope) {

//         $rootScope.registrationForm = {username: "", password: ""};

//         $rootScope.confirmRegistration = function () {
//             alert('kk');
//             console.log($rootScope.registrationForm.username);
//         };

//         $rootScope.cancelRegistration = function () {
//             $uibModalInstance.dismiss('cancel');
//         };
//     }]);

 