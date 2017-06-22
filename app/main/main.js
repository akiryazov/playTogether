'use strict';

angular
    .module('playTogether')
    .controller('MainCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {

        // function htmlbodyHeightUpdate() {
        //     var height3 = $(window).height();
        //     var height1 = $('.nav').height() + 50;
        //     var height2 = $('.main').height();
        //     if (height2 > height3) {
        //         $('html').height(Math.max(height1, height3, height2) + 10);
        //         $('body').height(Math.max(height1, height3, height2) + 10);
        //     }
        //     else {
        //         $('html').height(Math.max(height1, height3, height2));
        //         $('body').height(Math.max(height1, height3, height2));
        //     }

        // }
        // $(document).ready(function () {
        //     htmlbodyHeightUpdate()
        //     $(window).resize(function () {
        //         htmlbodyHeightUpdate()
        //     });
        //     $(window).scroll(function () {
        //         height2 = $('.main').height();
        //         htmlbodyHeightUpdate();
        //     });
        // });

        $scope.oneAtATime = true;

        $scope.events = [{sportType: "Футбол", dateAndTime: "25/04/2017 20:00-21:00", user: "Ангел Кирязов", location: 'ж.к. Дружба, бул. "Цветан Лазаров" 1581, София',
        peopleGoing: "9/12"}, {sportType: "Футбол", dateAndTime: "25/04/2017 20:00-21:00", user: "Ангел Кирязов", location: 'ж.к. Дружба, бул. "Цветан Лазаров" 1581, София',
        peopleGoing: "9/12"}];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function () {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.goToSingleEventPage = function () {
            $state.go('singleEvent');
        }

        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }]);