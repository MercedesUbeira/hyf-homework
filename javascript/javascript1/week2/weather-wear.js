//weather

const degrees= 20

const clothesToWear= function whatToWear () {
  if (degrees >= 20) {return "Wear something light. It's super warm outside! And don't forget the sunscreen"}
else if (degrees <= 19 && degrees >= 15) {return "Just put a light jacket on. It's warm."}
else if (degrees <= 14 && degrees >= 10) {return "Grab an intermedium jacket and maybe a scarf."}
else if (degrees <= 9 && degrees >= 0) {return "This is not a simulacrum. IT'S COOOOOLD. Better grab a jacket, a scarf and some gloves. It's cold!."}
else if (degrees <= -1 && degrees >= -5){return "It's snowing. If you can stay at home, do so."}
else if (degrees <= -6) {return "OMG is that Santa Claus outside?"}
else {return "Error."}}

console.log(clothesToWear(15));

