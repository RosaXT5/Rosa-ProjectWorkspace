/** JavaScript/jQuery File for Dice Game*/

	// Function for button actions when clicked 
	$(document).ready(function() {
		// Setting scores to zero
		let Player1Score = 0; 
		let Player2Score = 0;
		
		$("#playButton").on("click", function() {
		 // The function to roll dice when button is clicked 
		 // Array was made to "store" the dice images
		 let diceImages = [`DicePiece1.jpeg`, `DicePiece2.jpeg`, `DicePiece3.jpeg`,
		 				   `DicePiece4.jpeg`, `DicePiece5.jpeg`, `DicePiece6.jpeg`];
		 
		 // Rolling the dice to pick a random 
		 function rollDie() {
		 	return Math.floor(Math.random() * 6) + 1;
		 }
		 
		 // Changing image to the random dice choice
		 function displayDice(select, num) {
		 	$(select).attr("src", diceImages[num - 1]);
		 }
		 	
		 // The function to change the text depending on results
		 function showResults(text, type) {
		 	$("#resultMessage").removeClass("winner tie");
		 	$("#resultMessage").text(text);
		 	  
		 	  if (type === "winner") {
		 	  	$("#resultMessage").addClass("winner");
		 	  	$("#resultMessage").css({
		 	  		"color": "maroon"
		 	  	}).slideDown(300, function() {
		 	  	})
		 	  }
		 	  else if (type === "tie") {
		 	  	 $("#resultMessage").addClass("tie");
		 	  	 $("#resultMessage").css({
		 	  	 	"color": "white"
		 	  	 }).slideDown(300, function(){
		 	  	 })
		 	  }
		 	}
		 	
		 // The function that updates scores depending on results 
		 	function updateScore() {
		 		$("#total1").text(Player1Score);
		 		$("#total2").text(Player2Score);
		 	 }
		 	 
		 	 let Player1Roll = rollDie();
		 	 let Player2Roll = rollDie();
		 	 
		 	 displayDice("#image1", Player1Roll);
		 	 displayDice("#image2", Player2Roll);
		 	 
		 	 if (Player1Roll > Player2Roll) {
		 	 	Player1Score++;
		 	 	showResults("Player 1 wins!!⭑.ᐟ", "winner"); 	
		 	 } else if (Player1Roll < Player2Roll) {
		 	 	Player2Score++;
		 	 	showResults("Player 2 wins!!⭑.ᐟ", "winner");
		 	 } else {
		 	  	showResults("It's a Tie!", "tie");
		 	 }
		 	 
		 	 // Updating score based on the showResults
		 	 updateScore();
		}); 
	
	}); 