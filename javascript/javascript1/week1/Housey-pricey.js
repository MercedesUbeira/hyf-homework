// Housey pricey (A house price estimator)
// Peter

const housePeter = {
  name: "Peter",
  width: 8,
  depth: 10,
  heigth: 10,
  gardenSizeInM2: 100,
  houseCosts: 2500000,

  housePriceCalculation: function () {
    const volumeInMeters = this.width * this.depth * this.heigth;
    const housePrice = volumeInMeters * 2.5 * 1000 + this.gardenSizeInM2 * 300;
    return housePrice;
  },
};

if (housePeter.housePriceCalculation > housePeter.houseCosts) {
  console.log("Peter is paying too litle!");
} else housePeter.housePriceCalculation < housePeter.houseCosts;
{
  console.log("Peter is paying too much!");
}

const houseJulia = {
  name: "Julia",
  width: 11,
  depth: 5,
  heigth: 8,
  gardenSizeInM2: 70,
  housecosts: 1000000,

  housePriceCalculation: function () {
    let volumeInMeters2 = this.depth * this.width * this.heigth;
    const housePrice = volumeInMeters2 * 2.5 * 1000 + this.gardenSizeInM2 * 300;
    return housePrice;
  },
};

if (houseJulia.housePriceCalculation() > houseJulia.houseCosts) {
  console.log("Julia is paying too litle!");
} else houseJulia.housePriceCalculation() < houseJulia.houseCosts;
{
  console.log("Julia is paying too much!");
}
