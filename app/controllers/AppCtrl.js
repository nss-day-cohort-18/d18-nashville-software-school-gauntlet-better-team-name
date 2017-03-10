"use strict";

app.controller('AppCtrl', function($scope, $timeout, $mdSidenav, PlayerStorage) {

    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

    $scope.goToChosen = function(selected) {
        let whoWasPicked = selected;
        console.log('whoWasPicked = ', whoWasPicked);
        console.log('Your selected champion is ', selected);
        $scope.selected = selected;
        let weaponsForChamp = PlayerStorage.getWeapons(whoWasPicked);
        let weaponNames = [];
        for (var i = 0; i < weaponsForChamp.length; i++) {
            var weaponHolder = Object.keys(weaponsForChamp[i]);
            weaponNames = weaponNames.concat(weaponHolder);
        }
        console.log('weaponNames = ', weaponNames);
        // $scope.allTheWeapons = PlayerStorage.getWeapons(whoWasPicked);
        $scope.allTheWeapons = weaponNames;
        console.log('the available weapons are', $scope.allTheWeapons);
    };


    $scope.submitPlayerWeapon = function(playerWeapon) {
        console.log('playerWeapon in submitPlayerWeapon = ', playerWeapon);
        PlayerStorage.setPlayerWeapon(playerWeapon);
    };



    $scope.showIt = false;



});

// let makeChosenChampionObject = function() {

//         if ($routeParams.selected === "Warrior") {
//             player = Object.create(PlayerStorage.Warrior, {});
//         } if ($routeParams.selected === "Wizard") {
//             player = Object.create(PlayerStorage.Wizard, {});
//         } if ($routeParams.selected === "Assassin") {
//             player = Object.create(PlayerStorage.Assassin, {});
//         }
//         console.log('This player is: ', player);
//         $scope.healthNumber = player.health().toFixed(0);
//         $scope.weaponsGroup = player.weapons;
//         console.log('$scope.weaponsGroup = ', $scope.weaponsGroup);
//         return player;
//     };
