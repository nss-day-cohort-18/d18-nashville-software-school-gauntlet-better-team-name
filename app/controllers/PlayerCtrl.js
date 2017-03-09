"use strict";

app.controller("PlayerCtrl", function($scope, $routeParams) {
    console.log('$routeParams.chosen = ', $routeParams.chosen);
    $scope.chosen = $routeParams.chosen;
});