"use strict";

app.factory("PlayerStorage", function(){
	console.log("our Playerfactory wants to run");

let Combatant = {
	health: null,
	weapon: null,
	useweapon: function(){}
};

	// let log = function(){console.log("Combatant", Combatant);};

let Champion = Object.create(Combatant, {
	health: {value: function(){
	 	console.log("Champions health is trying");

	 	return (Math.random() * (100-80)) + 80;}},

	 chosenWeapon: {value: null},

	chooseWeapon: {value: function(selectedWeapon){
	this.chosenWeapon.name = selectedWeapon;
		// let weaponsKeys = this.weapons.Object.keys();
	// 	let weaponsVals = this.weapons.Object.values();

	// 	for (var weaponsKeys in  selectedWeapon){
	// 		console.log("starting out weapons keys loop");
	// 		for (var weaponsVals in weaponsKeys){
	// 			console.log("starting our vals loop");
	// 			return this.chosenWeapon.damage;
	// 		}
	}}

});

let Warrior = Object.create(Champion, {
	weapons: {value: [{dagger: 5},{axe: 10},{sword: 15}]}
});

	
 let Monster = Object.create(Combatant, {
		health: {value: function(){
 			console.log("Monster health");
 			return (Math.random() * (90-65)) + 65;}},
 		// weapons: {value: []},
 		chosenWeapon: {value: null},
		chooseWeapon: {value: function(){
			console.log("monster weapon");
			let indexNum = (Math.random() * (2-0)) + 0;
			return indexNum;
				}}
			
			
		});

 let Vampire = Object.create(Monster, {
 	weapons: {value:{fangs: 15}}
 	
 });

 let Werewolf = Object.create(Monster, {
 	weapons: {value: {claws: 10}}
 	
 });

 let Politician = Object.create(Monster, {
 	weapons: {value: {alternativeFacts: 10}}
 
 	
 });


// 		//write a function to loop through weapons array and chose random index
// 		 function(){return Math.random() * (number) + othernumber;},
			
		

// 		});


// };


let Wizard = Object.create(Champion, {
	weapons: {value: [{spell: 10},{potion: 15},{butterbeer: 20}]}
});

let Assassin = Object.create(Champion, {
	weapons: {value: [{"pocket sand": 15},{rock: 5},{"throwing star": 15}]}
});

let getWeapons = function(champion) {
	let championWeapons = [];
	console.log('champion in getWeapons = ', champion);
	if (champion === "Warrior") {
		championWeapons = Warrior.weapons;
	} if (champion === "Wizard") {
		championWeapons = Wizard.weapons;
	} if (champion === "Assassin") {
		championWeapons = Assassin.weapons;
	}
	return championWeapons;
};


let playerWeapon = "";

let setPlayerWeapon = function(playerChoice) {
	playerWeapon = playerChoice;
	console.log('playerWeapon = ', playerWeapon);
};

let getPlayerWeapon = function() {
	console.log('playerWeapon in getPlayerWeapon = ', playerWeapon);
	return playerWeapon;
};


return{Warrior, Wizard, Assassin, Vampire, Werewolf, Politician, getWeapons, getPlayerWeapon, setPlayerWeapon};
});

