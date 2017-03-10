"use strict";

app.controller("PlayerCtrl", function($scope, $routeParams, PlayerStorage) {
    let player = {};

    $scope.selected = $routeParams.selected;
    console.log('$scope.selected = ', $scope.selected);
    // PlayerStorage.log();
    // console.log("playerstorage assassin", PlayerStorage.Assassin);

    let makeChosenChampionObject = function() {

        if ($routeParams.selected === "Warrior") {
            player = Object.create(PlayerStorage.Warrior, {});
        } if ($routeParams.selected === "Wizard") {
            player = Object.create(PlayerStorage.Wizard, {});
        } if ($routeParams.selected === "Assassin") {
            player = Object.create(PlayerStorage.Assassin, {});
        }
        console.log('This player is: ', player);
        $scope.healthNumber = player.health().toFixed(0);
        $scope.weaponsGroup = player.weapons;
        console.log('$scope.weaponsGroup = ', $scope.weaponsGroup);
        return player;
    };

    makeChosenChampionObject();

    $scope.playerWeapon = PlayerStorage.getPlayerWeapon();

});

