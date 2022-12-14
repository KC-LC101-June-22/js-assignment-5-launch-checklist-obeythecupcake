// Write your JavaScript code here!

//const { addDestinationInfo } = require("./scriptHelper");

//const { pickPlanet } = require("./scriptHelper");



window.addEventListener("load", function() {
    console.log("window loaded");
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");
        let pilot = pilotNameInput.value;
        let copilot = copilotNameInput.value; 
        let fuelLevel = fuelLevelInput.value;
        let cargoMass = cargoMassInput.value;

        event.preventDefault();
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);

    });
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);   
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet = pickPlanet(listedPlanets);
       console.log(pickedPlanet)
       addDestinationInfo(document, pickedPlanet);
   })
   
});