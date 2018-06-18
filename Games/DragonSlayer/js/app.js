// textBox
// sleepButton
// retreatButton
// healButton
// attackButton
// downButton
// rightButton
// leftButton
// upButton
// playerPotions
// playerHealth
// playerName
// resetButton
// howToPlayButton
// aboutButton
// mainSection (class)

//Players current position in the map
const playerPos = [20, 15];


const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);;
  return `rgb(${red}, ${blue}, ${green})`;
}

const fieldOfView = () => {
  $(".square").hide();

  for(let i = playerPos[0] - 7; i <= playerPos[0] + 7; i++){
    for(let x = playerPos[1] - 4; x <= playerPos[1] + 4; x++){
      $(`#${i}-${x}`).show();
    }
  }
}

const generateDivs = () => {
    for(let i = 0; i < 50; i++){
      for(let x = 0; x < 50; x++){
        const $mySquare = $("<div>");
        $mySquare.addClass("square");
        $mySquare.attr("id", `${x}-${i}`);
        $mySquare.text(`${x}-${i}`);
        $mySquare.hide();
        $(".mainSection").append($mySquare);
      }
    }
    // terrainCheck();
    fieldOfView();

  //Used to test if the squares would fit into the container
  // for(let i = 0; i < 135; i++){
  //   const $mySquare = $("<div>");
  //   $mySquare.addClass("square");
  //   $mySquare.attr("id", i);
  //   $mySquare.css("background-color", randomColor());
  //   $(".mainSection").append($mySquare);
  // }
}

//Builds the terrain on certain rows to test to see if the player can move properly
const terrainCheck = () => {
  //Water - Col 22
  for(let i = 0; i < 50; i++){
    $(`#22-${i}`).removeClass().addClass("water").addClass("square");
  }
  //Plains - Col 21
  for(let i = 0; i < 50; i++){
    $(`#21-${i}`).removeClass().addClass("plains").addClass("square");
  }
  //Forest - Col 19
  for(let i = 0; i < 50; i++){
    $(`#19-${i}`).removeClass().addClass("forest").addClass("square");
  }
  //Mountain - Col 15
  for(let i = 0; i < 50; i++){
    $(`#12-${i}`).removeClass().addClass("mountains").addClass("square");
  }
  //Desert - Col 19
  for(let i = 0; i < 50; i++){
    $(`#19-${i}`).removeClass().addClass("desert").addClass("square");
  }
  //Town - Col 17
  for(let i = 0; i < 50; i++){
    $(`#17-${i}`).removeClass().addClass("towns").addClass("square");
  }
}

//Checks to see if the player can move onto the next square
const canMove = (x, y) => {
  const $mySquare = $(`#${x}-${y}`);

  //Debugging wether the player can move on 'water' or 'mountains'
  // console.log("Next Move " + $mySquare.attr("id"));
  // console.log("Square Class " + $mySquare.attr("class"));
  // console.log("Has water " + $mySquare.hasClass("water"));
  if( ($mySquare.hasClass("water")) || ($mySquare.hasClass("mountains")) ){
    return false;
  }
  return true;
}

//If the player can move, then do so
const movePlayer = (x, y) => {
  if(canMove(playerPos[0] + x, playerPos[1] + y)){
    playerPos[0] += x;
    playerPos[1] += y;
    console.log("Player Pos " + playerPos[0] + ", " + playerPos[1]);
    fieldOfView();
  }
}

//Enables the movement buttons
const enableMoveButtons = () => {
  $("#upButton").on("click", () => { movePlayer(0, -1) } );
  $("#downButton").on("click", () => { movePlayer(0, 1) } );
  $("#leftButton").on("click", () => { movePlayer(-1, 0) } );
  $("#rightButton").on("click", () => { movePlayer(1, 0) } );
}

//Disables the movement buttons
//Used so you can't move in combat or after win/lose conditions
const disableMoveButtons = () => {
  $("#upButton").off();
  $("#downButton").off();
  $("#leftButton").off();
  $("#rightButton").off();
}

//Reset the game to it's original position
const resetGame = () => {
  playerPos[0] = 35;
  playerPos[1] = 41;
  generateDivs();
  enableMoveButtons();
  buildDefaultMap();
}

//Document Ready function
$( () => {
  resetGame();
  //Enable misc buttons
});//End of Document Ready Function
