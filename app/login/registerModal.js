'use strict';

angular
    .module('playTogether')
    .controller('RegisterModalCtrl', function ($uibModalInstance) {

        var $ctrl = this;

        $ctrl.ok = function () {
        };

        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });