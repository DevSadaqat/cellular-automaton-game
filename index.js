import { next, parse } from "./src/engine.js";


const scale = 4;
const worldWidth = 480;
const worldHeight = 240;
const url = "./src/lexicon.json";
let patternData;
let patternMessage = ''; 



const canvas = document.querySelector("canvas");
canvas.width = worldWidth * scale;
canvas.height = worldHeight * scale;
const ctx = canvas.getContext("2d");

const render = (world) => {
  ctx.fillStyle = "#202020";
  ctx.fillRect(0, 0, worldWidth * scale, worldHeight * scale);
  ctx.fillStyle = "green";
  world.forEach((row, y) =>
    row.forEach(
      (alive, x) =>
        alive && ctx.fillRect(x * scale, y * scale, scale - 1, scale - 1)
    )
  );
};

const getPatterns = async () => {
  try {
    const data = await fetch(url);
    const pattern = await data.json(); 
    console.log(pattern); 
     patternData = pattern;
    let options = '';
    let patternElement = document.getElementById('pattern');
    for(let i = 0; i < pattern.length; i++){
      //Bind pattern to select element
        let item = pattern[i]; 
        options += '<option value="" selected disabled hidden>Choose here</option>';
        options += '<option value="' + item.name + '">';
        options +=  item.name + '</option>'; 
        patternElement.innerHTML = options;
    }
  } catch (error) {
    console.log(error);
  }
 };

 window.onload = getPatterns;

 
const showDescription = () => {
  let description = document.getElementById('description');
  let patternElement = document.getElementById('pattern');
  let selectedOption = patternElement.options[patternElement.selectedIndex].text; 
  //find the description matching the selected option 
  const filteredOption = filterData(patternData, selectedOption);
  // const filteredOption = patternData && selectedOption
  //   ? patternData.filter(item => item.name  === selectedOption)
  //   : "No result Found";
  //bind filteredOption to description 
  description.innerHTML = '<p>' + filteredOption[0].description + '</p>';  
  parse(filteredOption[0].pattern);   
}

// const handleStartGame = () => {
//   let selectedOption = patternElement.options[patternElement.selectedIndex].text;
//   //find the pattern matching the selected option 
//   const filteredPattern = filterData(patternData, selectedOption);
//   patternMessage = filteredPattern[0].pattern;
//   if(patternMessage.length != 0){
//     parse(patternMessage);
//   }
//   // const filteredPattern = patternData && selectedOption
//   //   ? patternData.filter(item => item.name  === selectedOption)
//   //   : "No result Found";
// }

//private function to filter data 
const filterData = (data, option) => {
  let filteredOption = data && option
    ? patternData.filter(item => item.name  === option)
    : "No result Found";

    return filteredOption;
}





document.getElementById('pattern').addEventListener('change', showDescription);
// document.getElementById('start-btn').addEventListener('onClick', handleStartGame);





// code below demonstrates how to advance the world to the next state and render it
// correct logic that reads initial state from lexicon and calculates the next state given current state needs to be implemented
const exampleWorld = Array(240).fill(Array(480).fill(true));
// const exampleWorld = world


render(next(exampleWorld));
