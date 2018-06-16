//Current Class Selector
let currentClass = "";

//Function exports an array of each class type to the console
//This information is then used in the actual DragonSlayer game to generate the map there
const exportField = () => {
  //Water
  let myArray = [];
  const $myWaterSquares = $(".water");
  for(let i of $myWaterSquares){
    myArray.push(i.textContent);
  }
  console.log(myArray);
  //Sample Output: ["Water", "0-14", "1-17", "1-20", "2-15", "2-18", "3-12", "3-16", "3-22", "4-13", "4-20", "5-17"]

  //Plains
  myArray = [];
  const $myPlains = $(".plains");
  for(let i of $myPlains){
    myArray.push(i.textContent);
  }
  console.log(myArray);

  //Forest
  myArray = [];
  const $myForest = $(".forest");
  for(let i of $myForest){
    myArray.push(i.textContent);
  }
  console.log(myArray);

  //Mountains
  myArray = [];
  const $myMountains = $(".mountains");
  for(let i of $myMountains){
    myArray.push(i.textContent);
  }
  console.log(myArray);

  //Desert
  myArray = [];
  const $myDesert = $(".desert");
  for(let i of $myDesert){
    myArray.push(i.textContent);
  }
  console.log(myArray);

  //Towns
  myArray = [];
  const $myTowns = $(".towns");
  for(let i of $myTowns){
    myArray.push(i.textContent);
  }
  console.log(myArray);
}

//Function changes the color of the 'currentButton' to the selected color
//Function also changes the global variable 'class selector'
const changeColor = (color, myClass) => {
  currentClass = myClass;
  $("#currentButton").css("background-color", color);
}

//Function 'colors' the clicked on square by removing it's current class and adding the 'class selector' class to it
//The class of 'square' is also re-added to maintain it's shape
const colorSquare = (event) => {
  const $mySquare = $(event.currentTarget);
  $mySquare.removeClass();
  $mySquare.addClass("square");
  $mySquare.addClass(currentClass);
}

//Function creates a new 'map' (current default is 30x30 which is 900 squares to color in)
//Every square is assigned a cordinate to help navigate through Dragon Slayer
//Every square displays it's cordinate and has a handler to change it's color
const generateMap = () => {
  for(let i = 0; i < 30; i++){
    for(let x = 0; x < 30; x++){
      const $mySquare = $("<div>");
      $mySquare.addClass("square");
      $mySquare.attr("id", `${i}-${x}`);
      $mySquare.text(`${i}-${x}`);
      $mySquare.on("click", colorSquare);
      $(".container").append($mySquare);
    }
  }
}

//Function enables all handlers across all the buttons on the top
const enableButtons = () => {
  $("#waterButton").on("click", () => { changeColor("#00B2FF", "water"); } );
  $("#plainsButton").on("click", () => { changeColor("#17FF00", "plains"); } );
  $("#forestButton").on("click", () => { changeColor("#135A0C", "forest"); } );
  $("#mountainsButton").on("click", () => { changeColor("#525A51", "mountains"); } );
  $("#desertButton").on("click", () => { changeColor("#EBD81F", "desert"); } );
  $("#townButton").on("click", () => { changeColor("#000000", "towns"); } );
  $("#generateButton").on("click", generateMap);
  $("#exportButton").on("click", exportField);
}

//Document Ready Function
$( () => {
  enableButtons();
});//End of Document Ready Function
