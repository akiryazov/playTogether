'use strict';

angular.module('playTogether')

  .controller('LoginCtrl', ['$uibModal', '$rootScope', function ($uibModal, $rootScope) {
    var $scope = this;

    $rootScope.registerModal = registerModal;

    function registerModal() {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/login/registerModal.html',
        controller: 'RegisterModalCtrl',
        size: 'md',
        backdrop: 'static',
      });
      modalInstance.result.then(function (response) {
        console.log("Modal closed " + response)
      }, function (response) {
        // toastr.clear();
        console.log("Modal closed " + response);
      })
    }

  }]);