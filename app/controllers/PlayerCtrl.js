"use strict";

app.controller("PlayerCtrl", function($scope, $routeParams, PlayerStorage) {
    console.log('$routeParams.chosen = ', $routeParams.chosen);
    $scope.chosen = $routeParams.chosen;
    PlayerStorage.log();
    console.log("playerstorage assassin", PlayerStorage.Assassin);

    let player = Object.create(PlayerStorage.Assassin, {
	    });

});

