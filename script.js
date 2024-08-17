// Write your JavaScript code here!

const { myFetch } = require("./scriptHelper");
window.addEventListener("load", function() {
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
console.log(listedPlanets);
       
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
});
