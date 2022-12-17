const names = [];
const todo = [];

function getReply(command) {
  const lowerCase = command.toLowerCase();

  //to push a new name
  let text = lowerCase.split(" ");
  let newName = text[text.length - 1];
  names.push(newName);

  if (lowerCase.includes("my name is")) {
    return `Nice to meet you ${names}. How may I help you today?`;
  }

  //to ask for name
  if (lowerCase.includes("what is my name")) {
    return `Your name is ${names[0]}`;
  }
  else if (names === undefined) {
    return `I don't think haven't told me your name yet. Trust me, I have a good memory, I am a computer. Please say "my name is..." and your name`;
  }


  //timer
  if (lowerCase.includes("set a timer")) {
    const x = lowerCase.split(" ");
    const numbers = x.filter((n) => Number(n));
    console.log("Timer set for " + numbers + " minutes");
    const timeout = setTimeout(function countdown() { }, + numbers * 60000);
    console.log("Timer done!");
  }

  //Doing some math
  if ((lowerCase.includes("+")) || (lowerCase.includes("-")) || (lowerCase.includes("*")) || (lowerCase.includes("/")) && (lowerCase === number)) {
    let operation = command.slice(7);
    return eval(operation)
  }


  //What day is today?
  if (lowerCase.includes("what day is it today?")) {
    let date = new Date();
    return `Today is ${date.toDateString()}`
  }

  //What is on my todo?
  if (lowerCase.includes("what is on my todo?")) {
    return `You have this tasks to do: ${todo}`;
  }

  //Adding things to the todo list
  let taskToAdd = text
    .slice(1, text.length - 3)
    .join(" ");
  if (lowerCase.includes("add") && (!todo.includes(taskToAdd))) {
    todo.push(taskToAdd);
    return `${taskToAdd} is added to your todo`;
  }

  //what if the element is already there?
  if (lowerCase.includes("add") && (todo.includes(taskToAdd))) {
    return `${taskToAdd} is already in your to do list. Are you sure you want to add it again?`;
  }

  //Removing an element from the list.
  let taskToRemove = text
    .slice(1, text.length - 3)
    .join(" ");

  if ((lowerCase.includes("remove")) && (todo.includes(taskToRemove))) {
    todo.shift(taskToRemove);
    return `Removed ${taskToRemove} from your to do list.`
  }

  //What is the element you want to remove is not on the list?
  else if ((lowerCase.includes("remove")) && (!todo.includes(taskToRemove))) {
    return `Could not find ${taskToRemove} in your to do list.`
  }

  //Tell me a joke
  if (lowerCase.includes ("tell me a joke")) {
    return getJoke()
  }
}

 async function getJoke() {
    const jokeData = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        'Accept': 'application/json'
      }
    });
    const jokeObj = await jokeData.json();
    return `${jokeObj.joke}`;
  }



//Comments are what the console should return
(async function () {
console.log(getReply("Hello my name is Mercedes")); // "Nice to meet you Mercedes"
console.log(getReply("What is my name?")); // "Your name is Mercedes"
console.log(getReply("add fishing to my todo"));// "fishing is added to your todo"
console.log(getReply("add fishing to my todo")); // "fishing is already in your todo list. Are you sure you want to add it again?"
console.log(getReply("remove cook from my todo")); //"Could not find cook in your todo list"
console.log(getReply("Add singing in the shower to my todo")); // "singing in the shower added to your todo"
console.log(getReply("What is on my todo?")); // You have this taks to do: fishing, singing in the shower.
console.log(getReply("Remove fishing from my todo")); // "fishing removed to your todo"
console.log(getReply("What is on my todo?")); // "You have this tasks to do: singing in the shower."
console.log(getReply("What day is it today?")); // It will tell you what day is today.
console.log(getReply("What is 2 + 1")); // "3"
console.log(getReply("What is 4 * 12"));
getReply("Set a timer for 1 minute."); //"Timer set for 1 minute".
console.log(await getReply('Tell me a joke.')) //It will tell you a random joke.
})()



