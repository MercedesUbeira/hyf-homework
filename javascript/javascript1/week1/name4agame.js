//Ez Name 4 a game (Startup name generator) 

const firstWords=["Incredible","Easy","Beautiful","Happy","Angry","Dumb","Crazy","Wise","Magic","Amazing"]
const seconedWords=["Fox","Dog","Cat","Horse","Octopus","Bird","Llama","Whale","Crocodile","Dinosaur"]
const randomNumber = Math.floor(Math.random() * 7);
        
console.log(`The startup name is ${firstWords[randomNumber]} ${ seconedWords[randomNumber]}`);
