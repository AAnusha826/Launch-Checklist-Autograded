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
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let h2 = document.getElementById("launchStatus");

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    let isShuttleReady = true;

    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        h2.style.color = "red";
        isShuttleReady = false;
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if (cargoLevel > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        h2.style.color = "red";
        isShuttleReady = false;
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    if (isShuttleReady) {
        h2.innerHTML = "Shuttle is Ready for Launch";
        h2.style.color = "green";
    }

    list.style.visibility = "visible";
}


// Function to fetch planetary data from API
    async function myFetch() {
        let planetsReturned;
    
        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
            return response.json();
        });
    
        return planetsReturned;
    }
    

// Function to pick a random planet from the list
function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}

 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;