"use strict";

app.controller("PlayerCtrl", function($scope, $routeParams, PlayerStorage) {
    let player = {};

    $scope.chosen = $routeParams.chosen;
    console.log('$scope.chosen = ', $scope.chosen);
    // PlayerStorage.log();
    // console.log("playerstorage assassin", PlayerStorage.Assassin);

    let choseOne = $routeParams.chosen;

    let makeChosenChampionObject = function() {

        if ($routeParams.chosen === "Warrior") {
            player = Object.create(PlayerStorage.Warrior, {});
        } if ($routeParams.chosen === "Wizard") {
            player = Object.create(PlayerStorage.Wizard, {});
        } if ($routeParams.chosen === "Assassin") {
            player = Object.create(PlayerStorage.Assassin, {});
        }
        console.log('player health is ', player.health());
        return player;
    };

    makeChosenChampionObject();
    console.log('This player is: ', player);

    let setPlayerHealth = function() {
        return player.health();
    };
});