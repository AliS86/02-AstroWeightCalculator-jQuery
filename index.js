//the button calls this function
$(document).ready(function function_name(argument) {
	// body...
})					
	
//takes the value from weight entered
var weight = document.getElementById("weight").value;
//takes the value of the planet chosen			
var thePlanets = document.getElementById("thePlanets").value;
//multiplies the two values
var total = weight * thePlanets;
//takes the second index of the option box and stores it
var planetName = document.getElementById("thePlanets") [document.getElementById("thePlanets").selectedIndex].text;
//called by id overAll to return the following text.
document.getElementById("overAll").innerHTML="If you were on the " + planetName + ", you would wiegh " + total + "lbs";
}
