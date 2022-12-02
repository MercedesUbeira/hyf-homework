//Flight 
const firstname= "Mercedes "
const surname= "Ubeira"

function getFullName(firstname, surname) {
  console.log (firstname + surname);
}

getFullName (firstname, surname);

let fullname1= "Juan Ubeira";
let fullname2= " Lionel Messi";

getFullName (fullname1 , fullname2);

const userFormalName = true
const gender= "female"
  if (userFormalName && gender === "male") {
    console.log (`Lord ${firstname} ${surname}`);
  } else if  (userFormalName && gender === "female" ) {
    console.log (`Lady ${firstname} ${surname}`);
  } else if (firstname === "" || firstname === Number) {
    console.log ("Try again.");
  } else if (surname === "" || surname === Number) {
  console.log ("Try again.");
  } else { console.log ("Unexpected error. Try again.")}
