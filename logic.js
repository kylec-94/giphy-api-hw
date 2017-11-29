$(document).ready(function(){

	
// starting array of strings
var initialArray = ["Jaws", "Fight Club", "Spectre"];


// LOGIC FOR PROGRAM STARTS HERE


function retrieveGifInfo() {

	// creating var for movie with data attribute
	var movie = $(this).attr("data-name");

	// variable for the query search URL
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=LikSwBRw6uZs3badtUlbQe2OJ77GmmK6&limit=10";


	// creating an ajax call for the specific button that is clicked

	$.ajax({
		url: queryURL,
		method: "GET"

	}).done(function(data){

		console.log(data);
		console.log(data[rating]);

		// creating div 

		// var buttonDiv = $("<div class='movie'>");

		// storing the rating data

		// var rating = data.rating;

		// create element for the rating

		// var p = $("<p>").text("Rating: " + rating);

		// get URL for gif

		// var gifURL = data.embed_url;

		// create element to hold gif

		// var image = $("<img>").attr("src", gifURL);

		// appending the rating to the gif

		// buttonDiv.append(p);

		// appending gif to the div 

		// buttonDiv.append(image);

		// append everything to gif-dump

		// $('#gif-dump').append(buttonDiv);
	});

	
}


function createButtons(){

	//deleting buttons prior to adding new ones

	$('#button-display').empty();

	// loop through array 

	for (var i = 0; i < initialArray.length; i++) {
	
		var button = $("<button>");

		// add class "movie" to button

		button.addClass("movie");

		// add data attr

		button.attr("data-name", initialArray[i]);

		// add text to button

		button.text(initialArray[i]);

		// add button to the button-display div

		$('#button-display').append(button);

	}


	} // end of displayButtons


// function for when submit button is clicked 

      $("#submit-button").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var gif = $("#gif-input").val().trim();
        // Adding movie from the textbox to our array
        initialArray.push(gif);
        // Calling renderButtons which handles the processing of our movie array
        createButtons();
      });
      // Adding a click event listener to all elements with a class of "movie"
      $(document).on("click", ".movie", retrieveGifInfo);
      // Calling the renderButtons function to display the intial buttons
      createButtons();



















	
	
});







