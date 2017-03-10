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

 
   let monster = {};
    
  let makeMonsterChoice = function(){
  let monsterArray = ["Vampire", "WereWolf", "Politician"];
  
  let randNum = Math.random() *(3-0) + 0;
  let smoothNum = parseInt(randNum);
  let monsterChoice = monsterArray[smoothNum];
  
 if(monsterChoice === "Vampire"){
  	monster = Object.create(PlayerStorage.Vampire, {});  
}
  if(monsterChoice === "WereWolf"){
  	monster = Object.create(PlayerStorage.WereWolf, {});
 }
 if(monsterChoice === "Politician"){
 	monster = Object.create(PlayerStorage.Politician, {});
 }


var monsterWeaponArray = Object.keys(monster.weapons);
$scope.monsterHealthNumber = monster.health().toFixed(0);
$scope.weapons = monsterWeaponArray[0];
$scope.monsterName = monsterChoice;
 
 console.log("monsterchosen", monster);



 return monster;

};

makeMonsterChoice();

// let getplayerWeaponObject = function(){
// 	let playerWeaponNumber = player.weapons.playerWeapon;
// 	console.log("playerWeaponNumber", playerWeaponNumber);

// 	let playerWeaponArray = $scope.weaponsGroup;

// 		for( var i = 0; i < playerWeaponArray.length; i++){
// 			if(playerWeaponArray[i] === playerWeapon){
// 				return playerWeaponArray[i];
// 			}
// 	}

// };

// let fightFunction = function(){

// 	$scope.monsterHealthNumber = monsterHealthNumber - 

// };



});

