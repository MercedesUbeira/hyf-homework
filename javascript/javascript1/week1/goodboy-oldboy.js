//Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2022;
let dogYearFuture = yearFuture;
const difference1 = dogYearFuture - dogYearOfBirth;
const dogYear = 7;
const humanYear = 1;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears === true) {
  const result2 = difference1 * dogYear;
  console.log(
    "Your dog will be " + result2 + " human years old in " + yearFuture
  );
} else if (shouldShowResultInDogYears === false) {
  const result1 = difference1;
}

console.log(
  "Your dog will be " + difference1 + " dog years old in " + yearFuture
);
