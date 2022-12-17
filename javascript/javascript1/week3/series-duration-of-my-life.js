const seriesDurations = [
  {
    title: "Breaking Bad",
    days: 1,
    hours: 22,
    minutes: 30,
  },
  {
    title: "Better Call Saul",
    days: 1,
    hours: 23,
    minutes: 15,
  },
  {
    title: "The walking dead",
    days: 5,
    hours: 3,
    minutes: 53,
  },
];

function logOutSeriesText() { const age = 80;
  const ageInDays = age * 365;

  for (let i = 0; i < seriesDurations.length; i++) {
  const hoursInDays = seriesDurations[i].hours / 24;
  const minutesInDays = ((seriesDurations[i].minutes / 60) / 24);
  const TotalinDays = seriesDurations[i].days + hoursInDays + minutesInDays;
  const percentOfMyLife = ((TotalinDays * 100) / ageInDays)

  console.log(`${seriesDurations[i].title} took ${percentOfMyLife} % of my life`);
  }
}

console.log(logOutSeriesText(seriesDurations)); // logs out the text found above

