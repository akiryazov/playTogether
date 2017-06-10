'use strict';

angular
    .module('playTogether')
    .controller('LoginCtrl', ['$scope','$state', 'toastr', function ($scope, $state, toastr) {

        $scope.loginForm = { username: null, password: null};

        $scope.confirmLogin = function () {
            var errorMessage = "";
            if ($scope.loginForm.username == null) {
                errorMessage += "Не сте въвели потребителско име. ";
            }
            else if ($scope.loginForm.username.length < 8) {
                errorMessage += "Потребителското име не може да е по-късо от 8 символа. ";
            }
            if ($scope.loginForm.password == null) {
                errorMessage += "Не сте въвели парола. ";
            }
            else if ($scope.loginForm.password.length < 8) {
                    errorMessage += "Паролата не може да е по-къса от 8 символа. "
            }

            if (errorMessage == "") {
                toastr.success('Успешно влизане в системата!', '');
                // $state.go('');
            }
            else {
                toastr.error(errorMessage, 'Грешка');
            }


        };
    }]);