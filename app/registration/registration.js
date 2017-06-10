'use strict';

angular
    .module('playTogether')
    .controller('RegistrationCtrl', ['$scope','$state', 'toastr', function ($scope, $state, toastr) {

        $scope.registrationForm = { username: null, password: null, confirmedPassword: null };

        $scope.confirmRegistration = function () {
            var errorMessage = "";
            if ($scope.registrationForm.username == null) {
                errorMessage += "Username field is required. ";
            }
            else if ($scope.registrationForm.username.length < 8) {
                errorMessage += "Username should be 8 symbols or more. ";
            }
            if ($scope.registrationForm.password == null) {
                errorMessage += "Password field is required. ";
            }
            else {
                if ($scope.registrationForm.password.length < 8) {
                    errorMessage += "Password should be 8 symbols or more. "
                }
                else if ($scope.registrationForm.confirmedPassword === null || $scope.registrationForm.password != $scope.registrationForm.confirmedPassword) {
                    errorMessage += "Passwords do not match. ";
                }
            }

            if (errorMessage == "") {
                toastr.success('Registration Successfull!', 'Success');
                // $state.go('');
            }
            else {
                toastr.error(errorMessage, 'Error');
            }


        };
    }]);