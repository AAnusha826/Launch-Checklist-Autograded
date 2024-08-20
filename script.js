// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");
window.addEventListener("load", function() {
    let listedPlanets;
     // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function(planets) {
        let selectedPlanet = pickPlanet(planets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    });

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");
//console.log(listedPlanets);
//// Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
// Ensure listedPlanets is defined before logging
if (listedPlanets) {
   console.log(listedPlanets);
} else {
    //console.log('Planets data is not yet loaded.');
}
       
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
});
