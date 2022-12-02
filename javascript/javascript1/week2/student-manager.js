const class07Students = ["Mechi", "Dima", "Tigran", "Raman"];

const queenAlwaysIn= "Queen Margrethe II"
addStudentToClass("Rene");
addStudentToClass("Julia");
addStudentToClass("Younes");


function addStudentToClass(studentName) {
  if (class07Students.length >= 6) {return "The class is full. No more alumns can be added. Unless your'e the queen."}
  else if (class07Students < 6) {return studentName + "It's been added to the class."}
  else if (class07Students.includes(studentName)) {return `Student ${studentName} is already in the class.`}
  else if (studentName === "") {return "You cannot add an empty space."}
  else if (studentName === queenAlwaysIn && class07Students >= 6); class07Students.push(studentName); {return class07Students}
}

function getNumberOfStudents(array) {
  return array.length;
}

console.log(addStudentToClass(class07Students));