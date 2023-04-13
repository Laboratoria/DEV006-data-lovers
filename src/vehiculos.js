import data from "./data/ghibli/ghibli.js";
const dataFilms = data.films;

export function filteredlocations(climate) {
  const locationsTable = document.getElementById("locationsTable");
  if (!locationsTable) {
    //console.log("charactersTable element not found")
    return;
  }
  const LocationsTable = locationsTable.getElementsByTagName("tbody")[0];
  const climateSelection = document.getElementById("climateSelect").value;
  const filteredlocations = dataFilms.flatMap((films) => {
    if(climateSelection === "allclimate"){
      return films.locations;
    }
    return films.locations.filter((location) => {
      if (location !== "allclimate") {
        return location.climate === climateSelection;
      }
    });
  });
  populateLocations(filteredlocations);
}
const locations = dataFilms.flatMap((films) => {
  return films.locations
});
populateLocations(locations);
const vehiclesTable = document.getElementById("vehiclesTable");
const vehiclesBody = vehiclesTable.getElementsByTagName("tbody")[0];
let tBody = "";
tBody = "";
let indexOne = 0;
dataFilms.forEach((film) => {
  film.vehicles.forEach((vehicle) => {
    if (indexOne % 2 === 0) {
      tBody = tBody + "<tr>";
    }
    tBody = tBody + "<td>";
    const vehicleImg = "<img src='" + vehicle.img + "' class='imgvehicle'/>";
    const vehicleName = "<h3>" + vehicle.name + "</h3>";
    const description = "<p class= 'justify'>" + vehicle.description + "</p>";
    const vehicleClass = "<p> Class: " + vehicle.vehicle_class + "</p>";
    const pilotName = "<p> Pilot name: " + location.surface_water + "</p>";
    tBody =
      tBody + vehicleImg + vehicleName + description + vehicleClass + pilotName;
    tBody = tBody + "</td>";
    if (indexOne % 2 === 1) {
      tBody = tBody + "</tr>";
    }
    indexOne++;
  });
});
vehiclesBody.innerHTML = tBody;
function populateLocations(locations) {
  const locationsTable = document.getElementById("locationsTable");
  const locationsBody = locationsTable.getElementsByTagName("tbody")[0];
  locationsBody.innerHTML = "";
  let tableBody = "";
  let index = 0;
  locations.forEach((location) => {
    if (index % 2 === 0) {
      tableBody = tableBody + "<tr>";
    }
    tableBody = tableBody + "<td>";
    const locationImg =
        "<img src='" + location.img + "' class='imgLocation'/>";
    const locationName = "<h3>" + location.name + "</h3>";
    const climate = "<p> Climate: " + location.climate + "</p>";
    const terrain = "<p> Terrain: " + location.terrain + "</p>";
    const surfaceWater =
        "<p> surface water: " + location.surface_water + "</p>";
    tableBody =
        tableBody +
        locationImg +
        locationName +
        climate +
        terrain +
        surfaceWater;
    tableBody = tableBody + "</td>";
    if (index % 2 === 1) {
      tableBody = tableBody + "</tr>";
    }
    index++;
  });
  locationsBody.innerHTML = tableBody;
}