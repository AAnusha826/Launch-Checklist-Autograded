// Write your helper functions here!

require('cross-fetch/polyfill');
// Function to add destination information to the DOM
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
    console.log("Generated HTML:", missionTarget.innerHTML); // Check the output
}


// Validate input
function validateInput(testInput) {
    console.log('Validating input:', testInput);
    
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

// Form submission handler
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log('Form submission details:', { pilot, copilot, fuelLevel, cargoLevel });
    
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let h2 = document.getElementById("launchStatus");

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    let isShuttleReady = true;

    if (fuelLevel < 10000) {
        console.log('Fuel level too low');
        fuelStatus.innerHTML = "Fuel level too low for launch";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        h2.style.color = "red";
        isShuttleReady = false;
    } else {
        console.log('Fuel level sufficient');
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if (cargoLevel > 10000) {
        console.log('Cargo mass too heavy');
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        h2.style.color = "red";
        isShuttleReady = false;
    } else {
        console.log('Cargo mass acceptable');
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    if (isShuttleReady) {
        console.log('Shuttle is ready for launch');
        h2.innerHTML = "Shuttle is Ready for Launch";
        h2.style.color = "green";
    }

    list.style.visibility = "visible";
}


// Function to fetch planetary data from API
    async function myFetch() {
        console.log('Fetching planetary data'); 
        let planetsReturned;
    
        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
            return response.json();
        });
        console.log('Planets returned:', planetsReturned);
    
        return planetsReturned;
    }
    

// Function to pick a random planet from the list
function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * planets.length);
    let selectedPlanet = planets[randomIndex];
    console.log('Picked planet:', selectedPlanet);
    return selectedPlanet;
}

 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;