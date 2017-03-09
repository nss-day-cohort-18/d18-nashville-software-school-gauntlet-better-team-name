"use strict";

app.factory("PlayerStorage", function(){
	console.log("our Playerfactory wants to run");

let Combatant = {
		health: null,
		weapon: null,
		useweapon: function(){}
	};

	let log = function(){console.log("Combatant", Combatant);};

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
		weapons: {value: [{dagger: 5},{axe: 10},{sword: 15}]},

	});

	let Wizard = Object.create(Champion, {
		weapons: {value: [{spell: 10},{potion: 15},{butterbeer: 20}]
		}
});

	let Assassin = Object.create(Champion, {
		weapons: {value: [{pocket_sand: 15},{rock: 5},{throwing_star: 15}]
	}
});

// let Monster = Object.create(Combatant, function(){

// 		health: function(){return (Math.random() * (100-60)) + 60;},
		//weapon:
// 		//write a function to loop through weapons array and chose random index
// 		 function(){return Math.random() * (number) + othernumber;},



// 		});


// };



return{log, Warrior, Wizard, Assassin};
});