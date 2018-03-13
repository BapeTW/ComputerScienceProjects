// TITLE
"use strict"; // Use strict mode

// Vars
let numFish = 0;
let numJunk = 0;
let numTreasure = 0;
// Add Event Listeners

$("#main").click(catchFish);

// Event Functions

function catchFish() {

	// Loop for ? times
	let randNum = Math.random();
	console.log(randNum);
	// Output Results
	if (randNum < 0.85) {
		let randFish = Math.random();
		if (randFish < 0.6) {
			$("#results").append("<img src='images/RawFish.png'>");
		} else if (randFish < 0.85) {
			$("#results").append("<img src='images/Raw_Salmon.png'>");
		} else if (randFish < 0.87) {
			$("#results").append("<img src='images/Clownfish.png'>");
		} else {
			$("#results").append("<img src='images/pufferfish.png'>");
		}
		numFish++;
	} else if (randNum < 0.95) {
		$("#results").append("<img src='images/leatherboots.png'>");
		numJunk++;
	} else {
		$("#results").append("<img src='images/Bow.png'>");
		numTreasure++;
	}
	// Output Totals
	$("#totals").html("Fish: " + numFish + " Junk: " + numJunk + " Treasure: " + numTreasure);

}
