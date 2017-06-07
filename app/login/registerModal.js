'use strict';

angular
    .module('playTogether')
    .controller('RegisterModalCtrl', ['$uibModalInstance', '$rootScope', function ($uibModalInstance, $rootScope) {

        var $ctrl = this;

        $rootScope.confirmRegistration = function () {
            alert('kk');
        };

        $rootScope.cancelRegistration = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);