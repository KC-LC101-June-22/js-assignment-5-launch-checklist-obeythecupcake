const { getByPlaceholderText } = require('@testing-library/dom');

// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   //getByID as below
   // using template literals to list below
   //also using innerHTML
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === ""){
        return "empty";
    }
    else if (isNaN(testInput)){
        return "is not a number"; 
    }
    else {
        return "is a number";
    }
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotValidated = validateInput(pilot);
    let copilotValidated = validateInput(copilot);
    let fuelLevelValidated = validateInput(fuelLevel);
    let cargoLevelValidated = validateInput(cargoLevel);
    let pilotId = document.getElementById("pilotStatus");
    let copilotId = document.getElementById("copilotStatus"); 
    let launchStatus = document.getElementById("launchStatus");
    pilotId.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotId.innerHTML = `Co-pilot ${copilot} is ready for launch`
    if (pilotValidated === "empty" || copilotValidated === "empty" || fuelLevelValidated === "empty" || cargoLevelValidated === "empty") {
        alert("All fields are required!");
    } else if (pilotValidated === "is a number" || copilotValidated === "is a number" || fuelLevelValidated === "is not a number" || cargoLevelValidated === "is not a number"){
        alert("Make sure to enter valid information for each field!")
    }
    list.style.visibility = "visible";
    if (fuelLevel < 10000){
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        }
    if (cargoLevel > 10000){
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    }
    if (fuelLevel > 10000 && cargoLevel < 10000){
        launchStatus.innerHTML = "Shuttle is Ready for Launch"
        launchStatus.style.color = "green";
    }
    
}
   

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch(URL).then( function(response) {
       //return response.json looka t chapter! });

    return planetsReturned;
}

function pickPlanet(planets) {
    //return the single planet that you pick 
    //math randomize to pick planet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
