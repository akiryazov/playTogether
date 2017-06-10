'use strict';
    angular
        .module('playTogether')
        .controller('AppCtrl', ['$scope', '$state', '$uibModal', function ($scope, $state, $uibModal) {

       $scope.alertss = function () {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'home/registerModal.html',
        controller: 'RegisterModalCtrl',
        size: 'md',
        backdrop: 'static',
      });
    }
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

 