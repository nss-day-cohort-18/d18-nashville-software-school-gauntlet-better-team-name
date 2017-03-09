"use strict";

app.controller('AppCtrl', function($scope, $timeout, $mdSidenav) {

    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

    $scope.goToChosen = function(selected) {
        console.log('Your selected champion is ', selected);
        $scope.selected = selected;
    };

    $scope.showIt = false;
});

