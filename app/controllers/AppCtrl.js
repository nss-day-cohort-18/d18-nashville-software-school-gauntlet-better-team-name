"use strict";

app.controller('AppCtrl', function($scope, $timeout, $mdSidenav) {
    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;

    $scope.googleUrl = 'http://google.com';

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

    $scope.goToChosen = function(selected) {
        console.log('Your selected champion is ', selected);
        $scope.selected = selected;
    };
});

