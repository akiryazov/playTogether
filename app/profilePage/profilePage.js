'use strict';

angular
    .module('playTogether')
    .controller('ProfilePageCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {

        $scope.participatedEvents = [{
            sportType: "Футбол", dateAndTime: "25/04/2017 20:00-21:00", user: "Ангел Кирязов", location: 'ж.к. Дружба, бул. "Цветан Лазаров" 1581, София'
        }, {
            sportType: "Баскетбол", dateAndTime: "26/04/2017 20:00-21:00", user: "Ангел Кирязов", location: 'ж.к. Дружба, бул. "Цветан Лазаров" 1581, София'
        }, {
            sportType: "Тенис", dateAndTime: "30/04/2017 20:00-21:00", user: "Мария Петрова", location: 'ж.к. Студентски град, София'
        }];

    }]);