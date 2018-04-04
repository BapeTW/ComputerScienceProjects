// TITLE
"use strict";

// Variables

// Event Listeners
$("#itemBoxGif").click(rollItemBox);
$("#itemBoxGif").click(rollHealing);
$("#itemBoxGif").click(rollMaterials);

// Functions
function rollItemBox() {
	let randNum = Math.random();
  	console.log(randNum);
	if (randNum < 0.317) {
		let randNumm = Math.random();
		if (randNumm < 0.518) {
			$("#results").html("You received a Grey Assault Rifle, ")
		} else if (randNumm < 0.777) {
			$("#results").html("You received a Green Assault Rifle, ")
		} else if (randNumm < 0.875) {
			$("#results").html("You received a Blue Assault Rifle, ")
		} else if (randNumm < 0.927) {
			$("#results").html("You received a Blue Scoped Assault Rifle, ")
		} else if (randNumm < 0.966) {
			$("#results").html("You received a Purple SCAR, ")
		} else if (randNumm < 0.99) {
			$("#results").html("You received a Purple Scoped Assault Rifle, ")
		} else {
			$("#results").html("You received a Gold SCAR, ")
		}
	} else if (randNum < 0.528) {
		let randNum = Math.random();
		if (randNum < 0.645) {
			$("#results").html("You received a Grey Burst Rifle, ")
		} else if (randNum < 0.903) {
			$("#results").html("You received a Green Burst Rifle, ")
		} else {
			$("#results").html("You received a Blue Burst Rifle, ")
		}
	} else if (randNum < 0.718) {
		let randNum = Math.random();
		if (randNum < 0.48) {
			$("#results").html("You received a Grey Suppressed SMG, ")
		} else if (randNum < 0.72) {
			$("#results").html("You received a Green Tactical SMG, ")
		} else if (randNum < 0.848) {
			$("#results").html("You received a Green Suppressed SMG, ")
		} else if (randNum < 0.928) {
			$("#results").html("You received a Blue Tactical SMG, ")
		} else if (randNum < 0.968) {
			$("#results").html("You received a Purple Tactical SMG, ")
		} else {
			$("#results").html("You received a Blue Supressed SMG, ")
		}
	} else if (randNum < 0.802) {
		let randNum = Math.random();
		if (randNum < 0.394) {
			$("#results").html("You received a Green Hunting Rifle, ")
		} else if (randNum < 0.64) {
			$("#results").html("You received a Blue Bolt-Action Sniper Rifle, ")
		} else if (randNum < 0.788) {
			$("#results").html("You received a Blue Hunting Rifle, ")
		} else if (randNum < 0.926) {
			$("#results").html("You received a Purple Semi-Auto Sniper Rifle, ")
		} else if (randNum < 0.975) {
			$("#results").html("You received a Purple Bolt-Action Sniper Rifle, ")
		} else if (randNum < 0.99) {
			$("#results").html("You received a Gold Semi-Auto Sniper Rifle, ")
		} else {
			$("#results").html("You received a Gold Bolt-Action Sniper Rifle, ")
		}
	} else if (randNum < 0.844) {
		let randNum = Math.random();
		if (randNum < 0.833) {
			$("#results").html("You received a Purple Suppressed Pistol, ")
		} else {
			$("#results").html("You received a Gold Suppressed Pistol, ")
		}
	} else if (randNum < 0.878) {
		let randNum = Math.random();
		if (randNum < 0.8) {
			$("#results").html("You received a Blue Crossbow, ")
		} else {
			$("#results").html("You received a Purple Crossbow, ")
		}
	} else if (randNum < 0.912) {
		let randNum = Math.random();
		if (randNum < 0.8) {
			$("#results").html("You received a Purple Hand Cannon, ")
		} else {
			$("#results").html("You received a Gold Hand Cannon, ")
		}
	} else if (randNum < 0.936) {
		let randNum = Math.random();
		if (randNum < 0.545) {
			$("#results").html("You received a Blue Nade Launcher, ")
		} else if (randNum < 0.818) {
			$("#results").html("You received a Blue Rocket Launcher, ")
		} else if (randNum < 0.891) {
			$("#results").html("You received a Purple Nade Launcher, ")
		} else if (randNum < 0.927) {
			$("#results").html("You received a Purple Guided Missle, ")
		} else if (randNum < 0.963) {
			$("#results").html("You received a Purple Rocket Launcher, ")
		} else if (randNum < 0.981) {
			$("#results").html("You received a Gold Nade Launcher, ")
		} else if (randNum < 0.9) {
			$("#results").html("You received a Gold Guided Missle, ")
		} else {
			$("#results").html("You received a Gold Rocket Launcher, ")
		}
	} else if (randNum < 0.947) {
		let randNum = Math.random();
		if (randNum < 0.667) {
			$("#results").html("You received a Purple Minigun, ")
		} else {
			$("#results").html("You received a Gold Minigun, ")
		}
	} else {
		let randNum = Math.random();
		if (randNum < 0.752) {
			$("#results").html("You received a Purple Heavy Shotgun, ")
		} else {
			$("#results").html("You received a Gold Heavy Shotgun, ")
		}
	}
}

function rollHealing() {
	let randNum = Math.random();
	if (randNum < 0.212) {
		$("#results").append("1 Shield Potion, ")
	} else if (randNum < 0.389) {
		$("#results").append("5 Bandages, ")
	} else if (randNum < 0.53) {
		$("#results").append("3 Grenades, ")
	} else if (randNum < 0.671) {
		$("#results").append("3 Small Shield Potions, ")
	} else if (randNum < 0.742) {
		$("#results").append("1 Med Kit, ")
	} else if (randNum < 0.813) {
		$("#results").append("4 Remote Explosives, ")
	} else if (randNum < 0.87) {
		$("#results").append("1 Slurp Juice, ")
	} else if (randNum < 0.912) {
		$("#results").append("1 Boogie Bomb, ")
	} else if (randNum < 0.954) {
		$("#results").append("3 Impulse Grenades, ")
	} else if (randNum < 0.978) {
		$("#results").append("1 Chug Jug, ")
	} else {
		$("#results").append("1 Bush Potion, ")
	}
}

function rollMaterials() {
	let randNum = Math.random();
	if (randNum < 0.476) {
		$("#results").append("and 30 Wood.")
	} else if (randNum < 0.833) {
		$("#results").append("and 30 Stone.")
	} else {
		$("#results").append("and 30 Metal.")
	}
}


