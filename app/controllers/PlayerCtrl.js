"use strict";

app.controller("PlayerCtrl", function($scope, $routeParams) {
    console.log('$routeParams.selected = ', $routeParams.selected);
    $scope.selected = $routeParams.selected;
});

