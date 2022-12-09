const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function CalcTravelTime(travelInformation) {
const time= travelInformation.destinationDistance / travelInformation.speed;
let totalHours = Math.floor(time);
let timeMinutes = Math.round((time - totalHours) * 60);
 return `${Math.trunc(time)} hours and ${Math.trunc(timeMinutes)} minutes`;

}

const travelTime = CalcTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes