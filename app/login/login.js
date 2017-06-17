'use strict';

angular
    .module('playTogether')
    .controller('LoginCtrl', ['$scope', '$state', 'toastr', '$rootScope', function ($scope, $state, toastr, $rootScope) {

        $scope.loginForm = { username: null, password: null };

        $scope.confirmLogin = function () {
            var errorMessage = "";
            if ($scope.loginForm.username == null) {
                errorMessage += "Не сте въвели потребителско име. ";
            }
            else if ($scope.loginForm.username != 'admin') {
                errorMessage += "Грешно потребителско име. ";
            }
            if ($scope.loginForm.password == null) {
                errorMessage += "Не сте въвели парола. ";
            }
            else if ($scope.loginForm.password != 'admin') {
                errorMessage += "Грешна парола. "
            }

            if (errorMessage == "") {
                $rootScope.loggedIn = true;
                toastr.success('Успешно влизане в системата!', '');
                $state.go('main');
            }
            else {
                console.log($rootScope.loggedIn);
                toastr.error(errorMessage, 'Грешка');
            }


        };
    }]);