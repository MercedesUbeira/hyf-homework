const notes = [];

function saveNote(content, id) {
  notes.push({'content':content, 'id':id});
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); 

///

  function getNote(id) {
    if (id === NaN || id === "") {
      return "Error"
    }
    for (let i = 0; i <notes.length; i++) {
      if (notes[i].id === id) {
        return notes[i]
      }  
    }
  }

const firstNote = getNote(1);
console.log(firstNote);

const secondNote = getNote(2);
console.log(secondNote);

const otherNote = getNote( );
console.log(otherNote);

function logOutNotesFormatted() {
  for (let i = 0; i<notes.length; i++) {
      console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`)
    }  
}

logOutNotesFormatted(); // should log out the text below
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
