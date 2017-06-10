'use strict';

angular
    .module('playTogether')
    .controller('LoginCtrl', ['$scope','$state', 'toastr', function ($scope, $state, toastr) {

        $scope.login = { username: null, password: null};

        $scope.confirmLogin = function () {
            var errorMessage = "";
            if ($scope.loginForm.username == null) {
                errorMessage += "Username field is required. ";
            }
            else if ($scope.loginForm.username.length < 8) {
                errorMessage += "Username should be 8 symbols or more. ";
            }
            if ($scope.loginForm.password == null) {
                errorMessage += "Password field is required. ";
            }
            else if ($scope.loginForm.password.length < 8) {
                    errorMessage += "Password should be 8 symbols or more. "
            }

            if (errorMessage == "") {
                toastr.success('Login Successfull!', 'Success');
                // $state.go('');
            }
            else {
                toastr.error(errorMessage, 'Error');
            }


        };
    }]);