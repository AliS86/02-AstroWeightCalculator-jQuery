var planets = [
    ['Sun', 27.9],
    ['Jupiter', 2.54],
    ['Neptune', 1.19],
    ['Saturn', 1.08],
    ['Earth', 1],
    ['Moon', 0.1655],
    ['Mars', 0.3895],
    ['Jupiter', 2.640],
    ['Saturn', 1.139],
    ['Uranus', 0.917],
    ['Neptune', 1.148],
    ['Pluto', 0.06]
];

for (var i = 0; i < planets.length; i++) {
    $("<option>").val(planets[i][1]).html(planets[i][0]).appendTo("#thePlanets");
}
$(function() {
    $(".myButton").on("click", function() {
        //takes the value from weight entered
        var weight = $("#weight").val();
        //takes the value of the planet chosen
        var thePlanets = $("#thePlanets").val();
        //multiplies the two values
        var total = weight * thePlanets;
        //takes the second index of the option box and stores it
        var planetName = $("#thePlanets option:selected").html();
        //called by id overAll to return the following text.
        $("#overAll").html("If you were on the " + planetName + ", you would wiegh " + total + "lbs");
    })
});
