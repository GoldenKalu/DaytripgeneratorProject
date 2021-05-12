"Write JavaSript";
"use strict";


// let userInput = prompt("which restaurant is better?");
// if(userinput === "pappadeaux") {alert("pappadeaux it is");
// }
// else if(userInput !== "texasRoadhouse") {alert("texasRoadhouse is amazing.")
// }
// else if(userInput === "beniHana") {alert ("offTobenny's.")
// }
// console.log (userInput);

let destinationArray = ["japan", "london", "laos", "belize"];
let restaurantArray = ["pappadeux", "texas Roadhouse", "benihaha"];
let transportationArray = ["uber", "lyft"];
let entertainmentArray= ["movies", "dancing", "zoo", "aquarium"];

function getRandomfromArray(Array){
  
  let Arrayresult = Array[Math.round (Math.random() * (Array.length - 1))];
  return Arrayresult;
}

let destinationResult = getRandomfromArray(destinationArray)
console.log (destinationArray)

let restaurantResult = getRandomfromArray(restaurantArray)
console.log (restaurantArray)

let transportationResult = getRandomfromArray(transportationArray)
console.log (transportationArray)

let entertainmentResult = getRandomfromArray(entertainmentArray)
console.log (entertainmentArray)

