let numGreyAR = 0;
let numGreenAR = 0;
let numBlueAR = 0;
let numBlueScopedAR = 0;
let numPurpleScar = 0;
let numPurpleScopedAR = 0;
let numGoldScar = 0;
let numGreyBurst = 0;
let numGreenBurst = 0;
let numBlueBurst = 0;
let numGreySSMG = 0;
let numGreenTacSub = 0;
let numGreenSSMG = 0;
let numBlueTacSub = 0;
let numPurpleTacSub = 0;
let numBlueSSMG = 0;
let numGreenHR = 0;
let numBlueBolt = 0;
let numBlueHR = 0;
let numPurpleSemi = 0;
let numPurpleBolt = 0;
let numGoldSemi = 0;
let numGoldBolt = 0;
let numPurpleSP = 0;
let numGoldSP = 0;
let numPurpleCB = 0;
let numGoldCB = 0;
let numPurpleHandCannon = 0;
let numGoldHandCannon = 0;
let numBlueNade = 0;
let numBlueLauncher = 0;
let numPurpleNade = 0;
let numPurpleGuided = 0;
let numPurpleLauncher = 0;
let numGoldNade = 0;
let numGoldGuided = 0;
let numGoldLauncher = 0;
let numPurpleMini = 0;
let numGoldMini = 0;
let numPurpleHeavy = 0;
let numGoldHeavy = 0;

// TITLE
"use strict";

// Variables

// Event Listeners
$("#itemBoxGif").click(rollItemBox);
$("#hundredTimes").click(rollHundred);
$("#fiveBulletBill").click(rollBill);

// Functions
function rollItemBox() {
	let randNum = Math.random();
	if (randNum < 0.317) {
		let randNumm = Math.random();
		if (randNumm < 0.518) {
			numGreyAR++;
		} else if (randNumm < 0.777) {
			numGreenAR++;
		} else if (randNumm < 0.875) {
			numBlueAR++;
		} else if (randNumm < 0.927) {
			numBlueScopedAR++;
		} else if (randNumm < 0.966) {
			numPurpleScar++;
		} else if (randNumm < 0.99) {
			numPurpleScopedAR++;
		} else {
			numGoldScar++;
		}
	} else if (randNum < 0.528) {
		let randNum = Math.random();
		if (randNum < 0.645) {
			numGreyBurst++;
		} else if (randNum < 0.903) {
			numGreenBurst++;
		} else {
			numBlueBurst++;
		}
	} else if (randNum < 0.718) {
		let randNum = Math.random();
		if (randNum < 0.48) {
			numGreySSMG++;
		} else if (randNum < 0.72) {
			numGreenTacSub++;
		} else if (randNum < 0.848) {
			numGreenSSMG++;
		} else if (randNum < 0.928) {
			numBlueTacSub++;
		} else if (randNum < 0.968) {
			numPurpleTacSub++;
		} else {
			numBlueSSMG++;
		}
	} else if (randNum < 0.802) {
		let randNum = Math.random();
		if (randNum < 0.394) {
			numGreenHR++;
		} else if (randNum < 0.64) {
			numBlueBolt++;
		} else if (randNum < 0.788) {
			numBlueHR++;
		} else if (randNum < 0.926) {
			numPurpleSemi++;
		} else if (randNum < 0.975) {
			numPurpleBolt++;
		} else if (randNum < 0.99) {
			numGoldSemi++;
		} else {
			numGoldBolt++;
		}
	} else if (randNum < 0.844) {
		let randNum = Math.random();
		if (randNum < 0.833) {
			numPurpleSP++;
		} else {
			numGoldSP++;
		}
	} else if (randNum < 0.878) {
		let randNum = Math.random();
		if (randNum < 0.8) {
			numPurpleCB++;
		} else {
			numGoldCB++;
		}
	} else if (randNum < 0.912) {
		let randNum = Math.random();
		if (randNum < 0.8) {
			numPurpleHandCannon++;
		} else {
			numGoldHandCannon++;
		}
	} else if (randNum < 0.936) {
		let randNum = Math.random();
		if (randNum < 0.545) {
			numBlueNade++;
		} else if (randNum < 0.818) {
			numBlueLauncher++;
		} else if (randNum < 0.891) {
			numPurpleNade++;
		} else if (randNum < 0.927) {
			numPurpleGuided++;
		} else if (randNum < 0.963) {
			numPurpleLauncher++;
		} else if (randNum < 0.981) {
			numGoldNade++;
		} else if (randNum < 0.9) {
			numGoldGuided++;
		} else {
			numGoldLauncher++;
		}
	} else if (randNum < 0.947) {
		let randNum = Math.random();
		if (randNum < 0.667) {
			numPurpleMini++;
		} else {
			numGoldMini++;
		}
	} else {
		let randNum = Math.random();
		if (randNum < 0.752) {
			numPurpleHeavy++;
		} else {
			numGoldHeavy++;
		}
	}
}

function rollHundred() {
	let pos = $("#position").val();
	for (let n = 0; n < 100; n++) {
		let randNum = Math.random();
		console.log(randNum);

		if (pos <= 6) {
			if (randNum < 0.45) {
				numBanana++;
				$("#numBananas").html(numBanana);
			} else if (randNum < 0.80) {
				numGreenShell++;
				$("#numGreenShells").html(numGreenShell);
			} else if (randNum < 0.95) {
				numStar++;
				$("#numStars").html(numStar);
			} else if (randNum < 0.99) {
				numGoldMush++;
				$("#numGMushrooms").html(numGoldMush);
			} else {
				numBulletBill++;
				$("#numBulletBills").html(numBulletBill);
			}
		} else {
			if (randNum < 0.05) {
				numBanana++;
				$("#numBananas").html(numBanana);
			} else if (randNum < 0.1) {
				numGreenShell++;
				$("#numGreenShells").html(numGreenShell);
			} else if (randNum < 0.35) {
				numStar++;
				$("#numStars").html(numStar);
			} else if (randNum < 0.7) {
				numGoldMush++;
				$("#numGMushrooms").html(numGoldMush);
			} else {
				numBulletBill++;
				$("#numBulletBills").html(numBulletBill);
			}
		}
	}
}

function rollBill() {
	let numBanana = 0;
	let numGreenShell = 0;
	let numStar = 0;
	let numGoldMush = 0;
	let numBulletBill = 0;
	let pos = $("#position").val();
	while (numBulletBill <= 4) {
		let randNum = Math.random();
		console.log(randNum);

		if (pos <= 6) {
			if (randNum < 0.45) {
				numBanana++;
				$("#numBananas").html(numBanana);
			} else if (randNum < 0.80) {
				numGreenShell++;
				$("#numGreenShells").html(numGreenShell);
			} else if (randNum < 0.95) {
				numStar++;
				$("#numStars").html(numStar);
			} else if (randNum < 0.99) {
				numGoldMush++;
				$("#numGMushrooms").html(numGoldMush);
			} else {
				numBulletBill++;
				$("#numBulletBills").html(numBulletBill);
			}
		} else {
			if (randNum < 0.05) {
				numBanana++;
				$("#numBananas").html(numBanana);
			} else if (randNum < 0.1) {
				numGreenShell++;
				$("#numGreenShells").html(numGreenShell);
			} else if (randNum < 0.35) {
				numStar++;
				$("#numStars").html(numStar);
			} else if (randNum < 0.7) {
				numGoldMush++;
				$("#numGMushrooms").html(numGoldMush);
			} else {
				numBulletBill++;
				$("#numBulletBills").html(numBulletBill);
			}
		}
	}
}
