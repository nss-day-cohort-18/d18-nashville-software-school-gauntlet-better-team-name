"use strict";

app.controller("PlayerCtrl", function($scope, $routeParams, $mdSidenav) {
    console.log('$routeParams.chosen = ', $routeParams.chosen);
    $scope.chosen = $routeParams.chosen;
});