'use strict';

angular
    .module('playTogether')
    .controller('RegistrationCtrl', ['$scope','$state', 'toastr', function ($scope, $state, toastr) {

        $scope.registrationForm = { username: null, password: null, confirmedPassword: null };

        $scope.confirmRegistration = function () {
            var errorMessage = "";
            if ($scope.registrationForm.username == null) {
                errorMessage += "Не сте въвели потребителско име. ";
            }
            else if ($scope.registrationForm.username.length < 8) {
                errorMessage += "Потребителското име не може да е по-късо от 8 символа. ";
            }
            if ($scope.registrationForm.password == null) {
                errorMessage += "Не сте въвели парола.";
            }
            else {
                if ($scope.registrationForm.password.length < 8) {
                    errorMessage += "Паролата не може да е по-къса от 8 символа."
                }
                else if ($scope.registrationForm.confirmedPassword === null || $scope.registrationForm.password != $scope.registrationForm.confirmedPassword) {
                    errorMessage += "Паролите не съвпадат. ";
                }
            }

            if (errorMessage == "") {
                toastr.success('Успешна регистрация!', '');
                // $state.go('');
            }
            else {
                toastr.error(errorMessage, 'Грешка');
            }


        };
    }]);